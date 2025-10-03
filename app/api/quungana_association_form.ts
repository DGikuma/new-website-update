import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import * as fs from 'fs/promises';
import * as XLSX from 'xlsx';
import path from 'path';


export interface QuunganaAssociationFormForm {
  address: string;
  beneficiariesData = []: string;
  city: string;
  const { 
      memberidno: string;
  country: number;
  dateofbirth: string;
  dependantsData = []: string;
  eimail: string;
  firstname: string;
  gender: string;
  groupname: string;
  groupnumber: string;
  idno: string;
  idtype: string;
  lastname: string;
  middlename: string;
  mobileno: string;
  relationship: string;
  title: string;
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { 
      memberidno, groupname, groupnumber, relationship, title, firstname, lastname,
      middlename, idtype, idno, dateofbirth, gender, country, city, address, mobileno, eimail,
      dependantsData = [],
      beneficiariesData = []
    } = req.body;

    console.log("✅ Received Form Data:", JSON.stringify(req.body, null, 2));
    console.log("✅ Received Dependants Data:", JSON.stringify(dependantsData, null, 2));
    console.log("✅ Received Beneficiaries Data:", JSON.stringify(beneficiariesData, null, 2));

    const publicDir = path.join(process.cwd(), 'public');
    await fs.mkdir(publicDir, { recursive: true });

    const filePath = path.join(publicDir, 'quungana_association_details.xlsx');
    let workbook;
    let ws1, ws2, ws3;

    let fileBuffer = await fs.readFile(filePath).catch(() => null);

    if (fileBuffer) {
      workbook = XLSX.read(fileBuffer, { type: 'buffer' });

      ws1 = workbook.Sheets['Member Details'] || XLSX.utils.aoa_to_sheet([[
        'Member Id Number','Group Name','Group Number','Relationship','Title',
        'First Name','Last Name','Middle Name','ID Type','ID Number',
        'Date Of Birth','Gender','Country','City','Address','Mobile Number','Email'
      ]]);

      ws2 = workbook.Sheets['Dependants Details'] || XLSX.utils.aoa_to_sheet([[
        'Member Id No','Dependant ID','Relationship','Title','First Name','Middle Name','Last Name',
        'ID Type','ID Number','Date Of Birth','Gender','Country','City'
      ]]);

      ws3 = workbook.Sheets['Beneficiaries Info'] || XLSX.utils.aoa_to_sheet([[
        'Member Id No','Beneficiary ID','Relationship','Title','Full Name',
        'Date Of Birth','Phone Number','Address','Email'
      ]]);

    } else {
      workbook = XLSX.utils.book_new();

      ws1 = XLSX.utils.aoa_to_sheet([[
        'Member Id Number','Group Name','Group Number','Relationship','Title',
        'First Name','Last Name','Middle Name','ID Type','ID Number',
        'Date Of Birth','Gender','Country','City','Address','Mobile Number','Email'
      ]]);
      XLSX.utils.book_append_sheet(workbook, ws1, 'Member Details');

      ws2 = XLSX.utils.aoa_to_sheet([[
        'Member Id No','Dependant ID','Relationship','Title','First Name','Middle Name','Last Name',
        'ID Type','ID Number','Date Of Birth','Gender','Country','City'
      ]]);
      XLSX.utils.book_append_sheet(workbook, ws2, 'Dependants Details');

      ws3 = XLSX.utils.aoa_to_sheet([[
        'Member Id No','Beneficiary ID','Relationship','Title','Full Name',
        'Date Of Birth','Phone Number','Address','Email'
      ]]);
      XLSX.utils.book_append_sheet(workbook, ws3, 'Beneficiaries Info');
    }

    // --- Append Member Row ---
    const existingMemberData = XLSX.utils.sheet_to_json(ws1, { header: 1 });
    existingMemberData.push([
      memberidno, groupname, groupnumber, relationship, title, firstname, lastname,
      middlename, idtype, idno, dateofbirth, gender, country, city, address, mobileno, eimail
    ]);
    workbook.Sheets['Member Details'] = XLSX.utils.aoa_to_sheet(existingMemberData);

    // --- Append Dependants ---
    const existingDependantsData = XLSX.utils.sheet_to_json(ws2, { header: 1 });
    if (dependantsData.length > 0) {
      dependantsData.forEach((dep, index) => {
        if (!dep || !dep.relationship || !dep.firstName) return;
        existingDependantsData.push([
          memberidno, index + 1, dep.relationship, dep.title || "",
          dep.firstName, dep.middleName || "", dep.surname || "",
          dep.idtypes, dep.idnos, dep.dob, dep.gendere, dep.countrye, dep.cities
        ]);
      });
    }
    workbook.Sheets['Dependants Details'] = XLSX.utils.aoa_to_sheet(existingDependantsData);

    // --- Append Beneficiaries ---
    const existingBeneficiariesData = XLSX.utils.sheet_to_json(ws3, { header: 1 });
    if (beneficiariesData.length > 0) {
      beneficiariesData.forEach((ben, index) => {
        if (!ben || !ben.relationship || !ben.beneficiary_fullname) return;
        existingBeneficiariesData.push([
          memberidno, index + 1, ben.relationship, ben.title || "",
          ben.beneficiary_fullname, ben.dob || "", ben.phone_number || "",
          ben.beneficiary_address || "", ben.beneficiary_email || ""
        ]);
      });
    }
    workbook.Sheets['Beneficiaries Info'] = XLSX.utils.aoa_to_sheet(existingBeneficiariesData);

    // --- Save Workbook ---
    const updatedBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    await fs.writeFile(filePath, updatedBuffer);

    const fileUrl = `https://www.birdviewmicroinsurance.com/quungana_association_details.xlsx`;

    // --- Send Email to Admins ---
    const transporter = nodemailer.createTransport({
      host: 'mail5016.site4now.net',
      port: 465,
      secure: true,
      auth: {
        user: "customerservice@birdviewinsurance.com",
        pass: "B!rdv!ew@2024",
      },
    });

    const mailOptions = {
      from: '"Birdview Insurance" <customerservice@birdviewinsurance.com>',
      to: ['DGikuma@birdviewinsurance.com','Gkangwana@birdviewinsurance.com','Kosiga@birdviewinsurance.com'],
      subject: `Updated Quungana Welfare Association Member Details from ${memberidno} - ${firstname}`,
      text: `Please find the updated Excel sheet with the latest Group, Dependants and Beneficiaries Details.\n\nDownload:\n${fileUrl}`,
      attachments: [{ filename: 'quungana_association_details.xlsx', content: updatedBuffer }]
    };

    await transporter.sendMail(mailOptions);

    // --- Confirmation Email to Member ---
    const fullName = `${firstname} ${middlename || ''} ${lastname}`.trim();
    const memberEmailBody = `
Dear ${fullName},

Thank you for submitting your membership details. Below is what we received:

📌 MEMBER DETAILS
- Member ID No: ${memberidno}
- Group Name: ${groupname}
- Group Number: ${groupnumber}
- Relationship: ${relationship}
- Title: ${title}
- First Name: ${firstname}
- Middle Name: ${middlename || '-'}
- Last Name: ${lastname}
- ID Type: ${idtype}
- ID Number: ${idno}
- Date of Birth: ${dateofbirth}
- Gender: ${gender}
- Country: ${country}
- City: ${city}
- Address: ${address}
- Mobile No: ${mobileno}
- Email: ${eimail}

📌 DEPENDANTS
${dependantsData.length > 0 ? dependantsData.map((d, i) => `
Dependant ${i + 1}:
- Relationship: ${d.relationship}
- Title: ${d.title || '-'}
- First Name: ${d.firstName}
- Middle Name: ${d.middleName || '-'}
- Last Name: ${d.surname || '-'}
- ID Type: ${d.idtypes}
- ID Number: ${d.idnos}
- Date of Birth: ${d.dob}
- Gender: ${d.gendere}
- Country: ${d.countrye}
- City: ${d.cities}
`).join('\n') : 'No dependants added.'}

📌 BENEFICIARIES
${beneficiariesData.length > 0 ? beneficiariesData.map((b, i) => `
Beneficiary ${i + 1}:
- Relationship: ${b.relationship}
- Title: ${b.title || '-'}
- Full Name: ${b.beneficiary_fullname}
- Date of Birth: ${b.dob || '-'}
- Phone: ${b.phone_number || '-'}
- Address: ${b.beneficiary_address || '-'}
- Email: ${b.beneficiary_email || '-'}
`).join('\n') : 'No beneficiaries added.'}

Warm regards,  
Birdview Insurance
`;

    await transporter.sendMail({
      from: '"Birdview Insurance" <customerservice@birdviewinsurance.com>',
      to: eimail,
      subject: `${memberidno} - ${fullName} | Confirmation of Submission`,
      text: memberEmailBody,
    });

    return res.status(200).json({ message: 'Form sent successfully', fileUrl });
  } catch (error) {
    console.error("❌ Full Error Details:", error);
    return res.status(500).json({ error: error.message || 'Unknown error occurred' });
  }
}