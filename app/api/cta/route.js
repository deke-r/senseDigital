import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, service } = await req.json();

    if (!name || !email || !phone || !service) {
      return Response.json({ success: false, error: "All fields are required" }, { status: 400 });
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });

    // const recipients = "bhavishya.sense@gmail.com"
        const recipients = [
      "senseprojects@yahoo.com",
      "senseprojects2019@gmail.com",
      "info@metasense.com",
    ];


                                // Table-based HTML email
    const htmlContent = `
      <table border="0" cellpadding="0" cellspacing="0" width="600" style="border:1px solid #e4e4e4; font-family:Arial,Helvetica,sans-serif;">
        <tbody>
          <tr>
            <td style="text-align:center;padding-top:15px;">
              <h2 style="margin:0;color:#000;">New Service Request</h2>
              <hr style="border:1px solid #4390ef;width:60px;margin:auto;">
            </td>
          </tr>
          <tr>
            <td style="padding:30px 50px;">
              <p style="font-size:15px;line-height:24px;color:#202020;">Hi Team,</p>
              <p style="font-size:15px;line-height:24px;color:#202020;">
                You’ve received a new request from the Meta Sense CTA form. Details are below:
              </p>

              <table cellpadding="6" cellspacing="0" width="100%" style="border-collapse:collapse;margin-top:15px;">
                <tr>
                  <td width="150" style="font-weight:bold;color:#000;">Name:</td>
                  <td style="color:#202020;">${name}</td>
                </tr>
                <tr>
                  <td width="150" style="font-weight:bold;color:#000;">Email:</td>
                  <td style="color:#202020;">${email}</td>
                </tr>
                <tr>
                  <td width="150" style="font-weight:bold;color:#000;">Phone:</td>
                  <td style="color:#202020;">${phone}</td>
                </tr>
                <tr>
                  <td width="150" style="font-weight:bold;color:#000;">Service:</td>
                  <td style="color:#202020;">${service}</td>
                </tr>
              </table>

         
            </td>
          </tr>
        </tbody>
      </table>
    `;

    // Send email
    await transporter.sendMail({
        from: `"METASENSE SERVICE REQUEST" <${process.env.MAIL_USER}>`,
        to: recipients,
        subject: "New Service Request",
        html: htmlContent
      });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return Response.json({ success: false, error: "Failed to send request" }, { status: 500 });
  }
}
