import nodemailer from "nodemailer";

export async function sendEmail(to: string, html: string) {
  // const testAccount = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "w6ajntp5sqjphgff@ethereal.email",
      pass: "WA9Njyr1u5zW87Ng3p",
    },
  });

  const info = await transporter.sendMail({
    from: '"Fred Foo" <foo@example.com>',
    to: to,
    subject: "Change password",
    html,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
