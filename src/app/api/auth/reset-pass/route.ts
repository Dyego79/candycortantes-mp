import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hashPassword } from "@/lib/hash"; // Importa desde el archivo separado

export async function POST(req: Request) {
  const { token, password } = await req.json();

  // Buscar el token en la base de datos
  const resetToken = await db.passwordResetToken.findUnique({
    where: { token },
  });

  if (!resetToken || resetToken.expires < new Date()) {
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 400 }
    );
  }

  // Hashear la nueva contraseña
  const hashedPassword = await hashPassword(password);

  // Actualizar la contraseña del usuario en la base de datos
  await db.user.update({
    where: { id: resetToken.userId },
    data: { password: hashedPassword },
  });

  // Eliminar el token de restablecimiento
  await db.passwordResetToken.delete({
    where: { token },
  });

  return NextResponse.json({ message: "Password reset successful" });
}
