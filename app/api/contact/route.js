import nodemailer from "nodemailer"
import { sanitize } from "dompurify"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" })
  }

  const { name, email, phone, message } = req.body

  // Server-side validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "All fields are required." })
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
    return res.status(400).json({ error: "Invalid email address." })
  }

  if (!/^\+?[0-9]{7,15}$/.test(phone)) {
    return res.status(400).json({ error: "Invalid phone number (7-15 digits)." })
  }

  if (message.length < 10) {
    return res.status(400).json({ error: "Message must be at least 10 characters." })
  }

  // Sanitize inputs
  const sanitizedName = sanitize(name)
  const sanitizedEmail = sanitize(email)
  const sanitizedPhone = sanitize(phone)
  const sanitizedMessage = sanitize(message)

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
    subject: "New Contact Form Submission from Website",
    html: `
      <p>You have a new contact form submission from the website:</p>
      <p><strong>Name:</strong> ${sanitizedName}</p>
      <p><strong>Email:</strong> ${sanitizedEmail}</p>
      <p><strong>Phone:</strong> ${sanitizedPhone}</p>
      <p><strong>Message:</strong></p>
      <p>${sanitizedMessage}</p>
    `,
    text: `New contact form submission from the website:\nName: ${sanitizedName}\nEmail: ${sanitizedEmail}\nPhone: ${sanitizedPhone}\nMessage: ${sanitizedMessage}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ success: true })
  } catch (error) {
    console.error("Error sending contact email:", error)
    res.status(500).json({ error: "Failed to send contact email." })
  }
}
