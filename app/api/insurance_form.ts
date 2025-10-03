import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from "formidable";
import * as fs from "fs/promises";
import * as fssync from "fs";
import * as path from "path";
import * as XLSX from "xlsx";
import nodemailer from "nodemailer";
import { google } from "googleapis";

export const config = {
  api: {
    bodyParser: false, // Required for formidable to handle files
  },
};

// === Google Drive Setup ===
async function uploadToDrive(policyHolder, product, files, excelPath) {
  const credentials = JSON.parse(
    await fs.readFile("path/to/service-account.json") // Replace with your path
  );

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/drive"],
  });

  const drive = google.drive({ version: "v3", auth });
  const sharedDriveFolderId = "1kovcpsQaf7UZvkuxte4IabFRR9G_i_O6"; // Shared Drive folder ID

  // 1️⃣ Create subfolder
  const folderRes = await drive.files.create({
    resource: {
      name: `${policyHolder}_${product}`,
      mimeType: "application/vnd.google-apps.folder",
      parents: [sharedDriveFolderId],
    },
    fields: "id, webViewLink",
    supportsAllDrives: true,
  });
  const folderId = folderRes.data.id;
  console.log("📂 Created subfolder:", folderRes.data.webViewLink);

  // 2️⃣ Upload Excel file
  const uploadedFiles = [];
  try {
    console.log("⬆️ Uploading Excel:", excelPath, "to folder ID:", folderId);
    const excelStream = fssync.createReadStream(excelPath);
    const excelFileRes = await drive.files.create({
      resource: {
        name: path.basename(excelPath),
        parents: [folderId],
      },
      media: {
        mimeType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        body: excelStream,
      },
      fields: "id, webViewLink",
      supportsAllDrives: true,
    });
    console.log(
      "✅ Uploaded Excel:",
      path.basename(excelPath),
      "→",
      excelFileRes.data.webViewLink
    );
    uploadedFiles.push({
      name: path.basename(excelPath),
      webViewLink: excelFileRes.data.webViewLink,
    });
  } catch (err) {
    console.error("❌ Excel upload failed:", err);
  }

  // 3️⃣ Upload other files
  for (const file of files) {
    try {
      console.log(
        "⬆️ Uploading file:",
        file.filename,
        "to folder ID:",
        folderId
      );
      const fileStream = fssync.createReadStream(file.filepath);
      const uploadedFile = await drive.files.create({
        resource: {
          name: `${product}_${file.filename}`,
          parents: [folderId],
        },
        media: {
          mimeType: "application/octet-stream",
          body: fileStream,
        },
        fields: "id, webViewLink",
        supportsAllDrives: true,
      });
      console.log(
        "✅ Uploaded:",
        file.filename,
        "→",
        uploadedFile.data.webViewLink
      );
      uploadedFiles.push({
        name: file.filename,
        webViewLink: uploadedFile.data.webViewLink,
      });
    } catch (err) {
      console.error(`❌ Upload failed for file ${file.filename}:`, err);
      uploadedFiles.push({
        name: file.filename,
        webViewLink: null,
        error: err.message,
      });
    }
  }

  return {
    folderLink: folderRes.data.webViewLink,
    files: uploadedFiles,
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const form = formidable({ multiples: true, keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("❌ Form parse error:", err);
      return res.status(500).json({ error: "Form parsing failed" });
    }

    try {
      // === Normalize fields ===
      const formData = {};
      for (const key in fields) {
        formData[key] = Array.isArray(fields[key]) ? fields[key][0] : fields[key];
      }

      // === Prepare uploaded files array ===
      const uploadedFiles = [];
      ["idCopy", "pinCopy", "logBookOrKraPin"].forEach((field) => {
        if (files[field]) {
          for (const file of files[field]) {
            uploadedFiles.push({
              filename: file.originalFilename,
              filepath: file.filepath,
            });
          }
        }
      });

      // === Excel handling ===
      const publicDir = path.join(process.cwd(), "public");
      await fs.mkdir(publicDir, { recursive: true });
      const filePath = path.join(publicDir, "vehicle_insurance_proposals.xlsx");

      const headers = [
        "Products",
        "Time On Risk",
        "PIN Number",
        "Policy Holder",
        "Email Address",
        "Registration Number",
        "Chassis Number",
        "Cover Type",
        "Certificate Start Date",
        "Period",
        "Certificate To Date",
        "ID Copy",
        "PIN Copy",
        "Log Book / KRA Copy",
        "Vehicle Make",
        "Year Of Manufacture",
        "License To Carry",
        "Timestamp",
      ];

      let workbook, worksheet;
      const fileBuffer = await fs.readFile(filePath).catch(() => null);

      if (fileBuffer) {
        workbook = XLSX.read(fileBuffer, { type: "buffer" });
        worksheet =
          workbook.Sheets["Vehicle Proposals"] ||
          XLSX.utils.aoa_to_sheet([headers]);
      } else {
        workbook = XLSX.utils.book_new();
        worksheet = XLSX.utils.aoa_to_sheet([headers]);
        XLSX.utils.book_append_sheet(workbook, worksheet, "Vehicle Proposals");
      }

      const existingData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      const timestamp = new Date().toISOString();

      const row = [
        formData.products || "",
        formData.timeOnRisk || "",
        formData.pinNumber || "",
        formData.policyHolder || "",
        formData.eimail || "",
        formData.registrationNumber || "",
        formData.chasisNo || "",
        formData.coverType || "",
        formData.certificateStartDate || "",
        formData.period || "",
        formData.certificateToDate || "",
        files.idCopy?.[0]?.originalFilename || "N/A",
        files.pinCopy?.[0]?.originalFilename || "N/A",
        files.logBookOrKraPin?.[0]?.originalFilename || "N/A",
        formData.vehicleMake || "",
        formData.yearOfMake || "",
        formData.licenseToCarry || "",
        timestamp,
      ];

      existingData.push(row);
      workbook.Sheets["Vehicle Proposals"] =
        XLSX.utils.aoa_to_sheet(existingData);

      const updatedBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "buffer",
      });
      await fs.writeFile(filePath, updatedBuffer);

      // === Upload to Google Drive ===
      const driveData = await uploadToDrive(
        formData.policyHolder,
        formData.products,
        uploadedFiles,
        filePath
      );

      // === Email sending ===
      const transporter = nodemailer.createTransport({
        host: "mail5016.site4now.net",
        port: 465,
        secure: true,
        auth: {
          user: "customerservice@birdviewinsurance.com",
          pass: "B!rdv!ew@2024",
        },
      });

      // Build attachments array directly from frontend form uploads
      const attachments = [];

      // 1️⃣ Attach user-uploaded files (from frontend form)
      ["idCopy", "pinCopy", "logBookOrKraPin"].forEach((field) => {
        if (files[field]) {
          for (const file of files[field]) {
            attachments.push({
              filename: file.originalFilename,
              path: file.filepath, // ✅ attach from temp storage
            });
          }
        }
      });

      // 2️⃣ Attach the generated Excel file
      attachments.push({
        filename: "vehicle_insurance_proposals.xlsx",
        path: filePath,
      });

      const mailOptions = {
        from: "customerservice@birdviewinsurance.com",
        to: "['Rmuiru@birdviewinsurance.com','Eyahuma@birdview insurance.com']",
        subject: `New Insurance Proposal: ${formData.policyHolder}`,
        text: `New proposal submitted by ${formData.policyHolder} at ${timestamp}.
        
      All files uploaded to Google Drive folder: ${driveData.folderLink}

      Files uploaded:
      ${driveData.files
        .map((f) => `${f.name}: ${f.webViewLink || "FAILED: " + f.error}`)
        .join("\n")}`,
        attachments, // ✅ directly from frontend form + Excel
      };

      await transporter.sendMail(mailOptions);

      // === Cleanup temporary files ===
      for (const key of Object.keys(files)) {
        for (const file of files[key]) {
          try {
            await fs.unlink(file.filepath);
          } catch (cleanupErr) {
            console.error("⚠️ Temp file cleanup failed:", cleanupErr);
          }
        }
      }

      // ✅ Respond with folder & file links
      res.status(200).json({
        message: "Form submitted, files uploaded to Drive, and email sent",
        driveFolderLink: driveData.folderLink,
        uploadedFiles: driveData.files,
      });
    } catch (err) {
      console.error("❌ API Error:", err);
      res.status(500).json({ error: err.message });
    }
  });
}
