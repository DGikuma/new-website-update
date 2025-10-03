import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const callbackData = req.body;
    console.log("M-Pesa Callback Data:", JSON.stringify(callbackData, null, 2));

    // ✅ You can save payment confirmation to your DB here

    return res.status(200).json({ message: "Callback received successfully" });
  } catch (err) {
    console.error("Callback Error:", err.message);
    return res.status(500).json({ error: "Callback handling failed" });
  }
}
