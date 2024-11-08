import { Resend } from "resend";

const resend = new Resend(`${process.env.AUTH_RESEND_KEY}`);

export const sendEmailVerification = async (email: string, token: string) => {
  try {
    await resend.emails.send({
      from: "Candy Cortantes <admin@candycortantes.com.ar>",
      to: email,
      subject: "Verifica tu correo",
      html: `
        <p>Hacé click en el siguiente enlace para validar tu correo</p>
        <a href="${process.env.NEXTAUTH_URL}/api/auth/verify-email?token=${token}">Vereificar mail</a>
      `,
    });

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
    };
  }
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetUrl = `${process.env.NEXTAUTH_URL}/reset-pass?token=${token}`;

  try {
    await resend.emails.send({
      from: "NextAuth js <a@webby.com.ar>",
      to: email,
      subject: "Resetea tu contraseña",
      html: `
        <p>Haz click en el siguiente enlace para resetear tu contraseña</p>
        <a href="${resetUrl}">Recuperar tu contraseña</a>
      `,
    });

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
    };
  }
};
