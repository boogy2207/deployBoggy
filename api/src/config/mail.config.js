const nodemailer = require("nodemailer");

const mail = {
  user: "store.ebogy@gmail.com",
  pass: "pktfmgybillvpfcn",
};

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  tls: {
    rejectUnauthorized: false,
  },
  secure: true, // true for 465, false for other ports
  auth: {
    user: mail.user, // generated ethereal user
    pass: mail.pass, // generated ethereal password
  },
});

const sendEmail = async (email, subject, html) => {
  try {
    await transporter.sendMail({
      from: `E-Bogy Store${mail.user}`,
      to: email,
      subject,
      html: `<h3>Welcome to Book Paradise!</h3>
          <p>Thanks for signing up. Please click the link below to confirm your account.</p>
          <a href="http://localhost:3000/user/confirm/${email}">Confirm your account</a>
          <p>Thanks!</p>
          <p>Book Paradise</p>
          `,
    });
  } catch (error) {
    console.log("algo no va bien con el email", error);
  }
};

const getTemplate = (name, token) => {
  return `<head>
          <link rel="stylesheet" href="./style.css">
      </head>
      
      <div id="email___content">
          <img src="" alt="">
          <h2>Hola ${name}</h2>
          <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
          <a
              href="http://localhost:3000/user/confirm/${token}"
              target="_blank"
          >Confirmar Cuenta</a>
      </div>`;
};

module.exports = {
  sendEmail,
  getTemplate,
};
