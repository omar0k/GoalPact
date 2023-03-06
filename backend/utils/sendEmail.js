const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
  try {
    let config = {
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    };
    let transporter = await nodemailer.createTransport(config);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: subject,
      text: text,
    });
    console.log("email sent successfully");
  } catch (error) {
    console.log("email not sent!");
    throw new Error(error);
    return error;
  }
};
