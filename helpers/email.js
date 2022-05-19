import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { nombre, email, token } = datos;
  //TODO:mover hacia variables de entorno
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "53c43f81388eba",
      pass: "47c28c43a11977",
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
  //TODO:mover hacia variables de entorno
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "53c43f81388eba",
      pass: "47c28c43a11977",
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
