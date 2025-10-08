import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, phone, message } = await request.json();

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const recipients = [
      "senseprojects@yahoo.com",
      "senseprojects2019@gmail.com",
      "info@metasense.com",
    ];




// const recipients = "bhavishya.sense@gmail.com"


const htmlContent = `
<table border="0" cellpadding="0" cellspacing="0" width="600" style="border:1px solid #e4e4e4; font-family:Arial,Helvetica,sans-serif;">
  <tbody>
    <tr>
      <td style="text-align:center;padding-top:15px;">
        <h2 style="margin:0;color:#000;">New Contact Form Submission</h2>
        <hr style="border:1px solid #4390ef;width:60px;margin:auto;">
      </td>
    </tr>
    <tr>
      <td style="padding:30px 50px;">
        <p style="font-size:15px;line-height:24px;color:#202020;">Hi Team,</p>
        <p style="font-size:15px;line-height:24px;color:#202020;">
          You’ve received a new inquiry from the Meta Sense contact form. Details are below:
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
            <td width="150" style="font-weight:bold;color:#000;">Message:</td>
            <td style="color:#202020;">${message}</td>
          </tr>
        </table>

      
      </td>
    </tr>
  </tbody>
</table>
`;

    await transporter.sendMail({
      from: `"METASENSE CONTACT FORM" <${process.env.MAIL_USER}>`,
      to: recipients,
      subject: "New Contact Message",
      html: htmlContent
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Mail error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email" }),
      { status: 500 }
    );
  }
}
