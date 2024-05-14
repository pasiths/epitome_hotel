import nodemailer from "nodemailer";

export const sendEmail = async (emailAddress, fullName, username, password) => {
  try {
    // throw new Error("this custom error")
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: process.env.EMAIL_PORT,
      secure: process.env.SECURE,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });
    const mailOptions = {
      from: process.env.USER,
      to: process.env.USER,
      subject: "Welcome to Our Company!",
      html: `
        <p>Dear ${fullName},</p>
        <p>Welcome to Our Company!</p>
        <p>Your account details:</p>
        <ul>
          <li><strong>Username:</strong> ${username}</li>
          <li><strong>Password:</strong> ${password}</li>
        </ul>
        <p>Please <a href="https://example.com/change-password">click here</a> to change your password.</p>
        <p>Best regards,<br>The Epitome Hotel</p>
      `,
    };
    transporter.sendMail(mailOptions);
  } catch (error) {
    // console.error("Email not sent:", error.message);
    return { error: `Email not sent: ${error.message}` };
  }
};
