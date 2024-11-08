import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

// Función para hashear contraseñas usando Bcrypt
export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 10);
};

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

  // Hashear la nueva contraseña con Argon2 (importado dinámicamente)
  const hashedPassword = await hashPassword(password);

  // Actualizar la contraseña del usuario
  await db.user.update({
    where: { id: resetToken.userId },
    data: { password: hashedPassword },
  });

  // Eliminar el token de recuperación de la base de datos
  await db.passwordResetToken.delete({
    where: { token },
  });

  return NextResponse.json({ message: "Password has been reset" });
}
