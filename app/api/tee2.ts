import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import * as XLSX from 'xlsx';
import { promises as fs } from 'fs';
import path from 'path';


export interface Tee2Form {
  account_name: number;
  account_number: number;
  bank_branch: string;
  bank_name: string;
  city: string;
  company_name: string;
  company_number: string;
  const {
        title: string;
  country: number;
  dateofbirth: string;
  eimail: string;
  firstname: string;
  gender: string;
  idno: string;
  idtype: string;
  lastname: string;
  middlename: string;
  mobileno: string;
  pin_no: string;
  postal_address: string;
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const {
        title, firstname, middlename, lastname,
        gender, mobileno, postal_address, idtype,
        idno, pin_no, dateofbirth, country,
        city, eimail, company_name, company_number,
        bank_name,account_name, bank_branch, account_number

    } = req.body;

    const fullname = `${firstname} ${middlename} ${lastname}`.replace(/\s+/g, ' ').trim();
    
  

    // ✅ Ensure public directory exists
    const publicDir = path.join(process.cwd(), 'public');
    await fs.mkdir(publicDir, { recursive: true });

    const filePath = path.join(publicDir, 'global_agent_data.xlsx');

    let workbook;
    const fileBuffer = await fs.readFile(filePath).catch(() => null);

    if (fileBuffer) {
      workbook = XLSX.read(fileBuffer, { type: 'buffer' });
    } else {
      workbook = XLSX.utils.book_new();
    }

    let worksheet = workbook.Sheets['Global Agent Data'];
    if (!worksheet) {
      worksheet = XLSX.utils.aoa_to_sheet([
        [
          'Title', 'FirstName', 'MiddleName', 'LastName',
          'Gender', 'Mobile Number', 'Postal Address', 'Id Type	',
          'Id Number', 'KRA PIN Number', 'Date Of Birth',
          'Country', 'City', 'Email','Company Name', 'Company Number',
          'Bank Name','Account Name','Bank Branch','Account Number'

        ]
      ]);
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Global Agent Data');
    }

    const newRow = [
       title, firstname, middlename, lastname,
        gender, mobileno, postal_address, idtype,
        idno, pin_no, dateofbirth, country,
        city, eimail, company_name, company_number,
        bank_name,account_name, bank_branch, account_number
    ];

    // ✅ Append new row to worksheet
    const existingData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    existingData.push(newRow);
    const updatedWorksheet = XLSX.utils.aoa_to_sheet(existingData);
    workbook.Sheets['Global Agent Data'] = updatedWorksheet;

    // ✅ Save the Excel file FIRST (even if email fails)
    const updatedBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    await fs.writeFile(filePath, updatedBuffer);
    console.log('✅ Data successfully saved to the Excel file.');

    // ✅ Generate a download URL
    const fileUrl = `/global_agent_data.xlsx`; // File is stored in the public folder

    // ✅ Send email (but DO NOT block the response if it fails)
    const transporter = nodemailer.createTransport({
      host: 'mail5016.site4now.net',
      port: 465,
      secure: true,
      auth: {
        user: "Agentregistration@birdviewinsurance.com",
        pass: "B!rdv!ew@2024",
      },
    });

    const mailOptions = {
      from: '"Birdview Insurance" <Agentregistration@birdviewinsurance.com>',
      to: ['Pkihuria@birdviewinsurance.com', 'Gkangwana@birdviewinsurance.com', 
            'Mkiraguri@birdviewinsurance.com','Rmuiru@birdviewinsurance.com', 
            'Akinyanjui@birdviewinsurance.com' , 'customerservice@birdviewinsurance.com'],
      subject: `Updated Agent Details from ${fullname} - ${mobileno}`,
      text: `Please find the updated Excel sheet with all Agent Details.\nDownload it here: ${fileUrl}`,
      attachments: [
        {
          filename: 'global_agent_data.xlsx',
          content: updatedBuffer,
        },
      ],
    };

    transporter.sendMail(mailOptions)
      .then(() => {
        console.log('✅ Email sent successfully.');
      })
      .catch((emailError) => {
        console.error('❌ Email Sending Failed:', emailError.message);
      });

    // ✅ Respond with the file download URL
    res.status(200).json({
      message: 'Agent Application Form submitted successfully.',
      downloadUrl: fileUrl
    });

  } catch (error) {
    console.error('❌ Full Error Details:', error);
    res.status(500).json({ error: error.message || 'Unknown error occurred' });
  }
}