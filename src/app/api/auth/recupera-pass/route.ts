import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { nanoid } from "nanoid";
import { sendPasswordResetEmail } from "@/lib/mail";

export async function POST(req: Request) {
  const { email } = await req.json();

  // Verificar si el usuario existe
  const user = await db.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const token = nanoid();

  // Crear un token de recuperación
  await db.passwordResetToken.create({
    data: {
      userId: user.id,
      token,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // 24 horas
    },
  });

  // Enviar el correo electrónico de recuperación
  await sendPasswordResetEmail(email, token);

  return NextResponse.json({ message: "Password reset email sent" });
}
