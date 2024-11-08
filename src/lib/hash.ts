import bcrypt from "bcryptjs";

// Función para hashear contraseñas usando Bcrypt
export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 10);
};
