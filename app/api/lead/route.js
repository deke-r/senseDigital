import nodemailer from "nodemailer"
import { sanitize } from "dompurify"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" })
  }

  const { phoneNumber } = req.body

  // Server-side validation
  if (!phoneNumber) {
    return res.status(400).json({ error: "Phone number is required." })
  }

  const numericPhoneNumber = phoneNumber.replace(/\D/g, "")
  if (numericPhoneNumber.length < 7 || numericPhoneNumber.length > 15) {
    return res.status(400).json({ error: "Phone number must be between 7 and 15 digits." })
  }

  // Sanitize input (though for a phone number, it's less critical, but good practice)
  const sanitizedPhoneNumber = sanitize(phoneNumber)

  // NodeMailer setup
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const adminEmail = process.env.ADMIN_EMAIL

  if (!adminEmail) {
    console.error("ADMIN_EMAIL environment variable is not set.")
    return res.status(500).json({ error: "Server configuration error." })
  }

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: adminEmail,
    subject: "New Consultation Lead from Website",
    html: `
      <p>You have a new consultation request from the website:</p>
      <p><strong>Phone Number:</strong> ${sanitizedPhoneNumber}</p>
      <p>Please contact them as soon as possible.</p>
    `,
    text: `New consultation request from the website:\nPhone Number: ${sanitizedPhoneNumber}\nPlease contact them as soon as possible.`,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ success: true })
  } catch (error) {
    console.error("Error sending lead email:", error)
    res.status(500).json({ error: "Failed to send lead email." })
  }
}
