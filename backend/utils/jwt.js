import jwt from "jsonwebtoken";

/**
 * Generates a JWT token by signing the provided payload.
 *
 * @async
 * @param {Object} payload - The data to be encoded into the JWT.
 * @returns {Promise<string>} A promise that resolves to the signed JWT token.
 */
export async function hash(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
}

/**
 * Verifies a JWT token using the secret stored in environment variables.
 *
 * @async
 * @param {string} token - The JWT token to verify.
 * @returns {Promise<Object>} The decoded payload if the token is valid.
 * @throws {Error} If the token is invalid or verification fails.
 */
export async function verify(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}
