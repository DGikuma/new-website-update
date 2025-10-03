import type { NextApiRequest, NextApiResponse } from 'next';

export interface PaymentStatusForm {
  const { checkoutRequestID: string;
}


let payments = {};

export default function handler(req, res) {
  const { checkoutRequestID } = req.query;
  if (!checkoutRequestID) {
    return res.status(400).json({ error: "checkoutRequestID required" });
  }

  const status = payments[checkoutRequestID] || "PENDING";
  return res.status(200).json({ status });
}

// ✅ In your mpesa-callback.js, update `payments[checkoutRequestID] = "CONFIRMED"`