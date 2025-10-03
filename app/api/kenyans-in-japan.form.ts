import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from "formidable";
import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";


export interface KenyansInJapanFormForm {
  eimail: string;
  firstname: string;
  lastname: string;
  memberidno: string;
  mobileno: string;
  selectedLastExpenseOptions: string;
  selectedMedicalOption: string;
  totalPremium: number;
}


export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Form parse error:", err);
      return res.status(500).json({ error: "Form parse failed" });
    }

    try {
      // Flatten fields (FormData comes as arrays)
      const body = {};
      for (let key in fields) {
        body[key] = Array.isArray(fields[key]) ? fields[key][0] : fields[key];
      }

      // ✅ Extract selected options & premium
      const selectedMedicalOption = body.selectedMedicalOption || "None";
      const selectedLastExpenseOptions =
        body.selectedLastExpenseOptions || "None";
      const totalPremium = body.totalPremium || "0";

      // --- Excel File Path ---
      const excelPath = path.join(process.cwd(), "data", "members.xlsx");

      let workbook;
      let worksheet;
      if (fs.existsSync(excelPath)) {
        workbook = XLSX.readFile(excelPath);
        worksheet = workbook.Sheets[workbook.SheetNames[0]];
      } else {
        workbook = XLSX.utils.book_new();
        worksheet = XLSX.utils.aoa_to_sheet([
          [
            "MemberID",
            "First Name",
            "Last Name",
            "Email",
            "Phone",
            "Medical Option",
            "Last Expense Options",
            "Total Premium",
          ],
        ]);
        XLSX.utils.book_append_sheet(workbook, worksheet, "Members");
      }

      // --- Append new row ---
      const newRow = [
        body.memberidno,
        body.firstname,
        body.lastname,
        body.eimail,
        body.mobileno,
        selectedMedicalOption,
        selectedLastExpenseOptions,
        totalPremium,
      ];

      XLSX.utils.sheet_add_aoa(
        worksheet,
        [newRow],
        { origin: -1 } // append row
      );
      XLSX.writeFile(workbook, excelPath);

      // --- Send Email with Nodemailer ---
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"Kenyans In Japan" <${process.env.SMTP_USER}>`,
        to: body.eimail, // 👈 send to member
        cc: "admin@birdviewinsurance.com", // 👈 add your admin email
        subject: "Membership Registration Confirmation",
        html: `
          <h2>Membership Registration Successful</h2>
          <p><strong>Member ID:</strong> ${body.memberidno}</p>
          <p><strong>Name:</strong> ${body.firstname} ${body.lastname}</p>
          <p><strong>Email:</strong> ${body.eimail}</p>
          <p><strong>Phone:</strong> ${body.mobileno}</p>
          <hr/>
          <h3>Selected Options</h3>
          <p><strong>Medical Option:</strong> ${selectedMedicalOption}</p>
          <p><strong>Last Expense Options:</strong> ${selectedLastExpenseOptions}</p>
          <p><strong>Total Premium:</strong> Kshs ${parseInt(totalPremium).toLocaleString()}</p>
        `,
      };

      await transporter.sendMail(mailOptions);

      return res
        .status(200)
        .json({ message: "✅ Form submitted, Excel updated, and email sent." });
    } catch (error) {
      console.error("API error:", error);
      return res.status(500).json({ error: error.message });
    }
  });
}