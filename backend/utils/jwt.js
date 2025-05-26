import jwt from "jsonwebtoken";

export async function hash(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
}

export async function verify(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}
