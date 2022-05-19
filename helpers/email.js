import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { nombre, email, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  //Informacion del email
  const info = await transport.sendMail({
    from: '"Simple Project-Adminstardor de Proyectos" <cuenta@simpleproject.com>',
    to: email,
    subject: "Simple Project - Confirmacion de cuenta",
    text: "Confirma tu cuenta en simple Project",
    html: `<p>Hola ${nombre}, para confirmar tu cuenta en Simple Project,</p> 
    <p> haz click en el siguiente enlace:<a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a> </p><p>Si no creaste esta cuenta puedes ignorar este mensaje</p>`,
  });
};

export const emailOlvidePassword = async (datos) => {
  const { nombre, email, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  //Informacion del email

  const info = await transport.sendMail({
    from: '"Simple Project-Adminstardor de Proyectos" <cuenta@simpleproject.com>',
    to: email,
    subject: "Simple Project - Reestablece tu Password",
    text: "Reestablece tu Password",
    html: `<p>Hola ${nombre}, solicitaste reestablecer tu password,</p> 
    <p> haz click en el siguiente enlace para: <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">reestablecer el password</a> </p><p>Si no solicitaste este cambio puedes ignorar este mensaje</p>`,
  });
};
