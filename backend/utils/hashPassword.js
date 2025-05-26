import bcrypt from "bcrypt";

export async function hashPassword(password) {
  const saltRounds = parseInt(process.env.SALT_ROUNDS);
  const hashPassword = await bcrypt.hash(password, saltRounds);
  return hashPassword;
}

export async function comparePassword(password, hashedPassword) {
  const result = await bcrypt.compare(password, hashedPassword);
  return result;
}
