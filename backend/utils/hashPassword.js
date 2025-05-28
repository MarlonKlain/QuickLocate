import bcrypt from "bcrypt";

/**
 * Hashes a plain text password using bcrypt with a specified number of salt rounds.
 *
 * @param {string} password - The plain text password to hash.
 * @returns {Promise<string>} The hashed password.
 */
export async function hashPassword(password) {
  const saltRounds = parseInt(process.env.SALT_ROUNDS);
  const hashPassword = await bcrypt.hash(password, saltRounds);
  return hashPassword;
}

/**
 * Compares a plain text password with a hashed password to check if they match.
 *
 * @async
 * @param {string} password - The plain text password to verify.
 * @param {string} hashedPassword - The hashed password to compare against.
 * @returns {Promise<boolean>} A promise that resolves to true if the passwords match, false otherwise.
 */
export async function comparePassword(password, hashedPassword) {
  const result = await bcrypt.compare(password, hashedPassword);
  return result;
}
