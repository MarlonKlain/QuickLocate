import { verify } from "../../utils/jwt.js";

//When using middleware, there are two different styles of fastify router hooks:
//if async function is being used, do not use: done()
//If you use a callback-based function (no async), then call done(err) or done()
//And always use the return at the end of each code block

/**
 * Middleware to authenticate incoming requests using JWT.
 *
 * Extracts the JWT from the Authorization header, verifies it,
 * and attaches the decoded user information to the request object.
 * If authentication fails, responds with a 401 Unauthorized status.
 *
 * @async
 * @param {import('fastify').FastifyRequest} request - The incoming request object.
 * @param {import('fastify').FastifyReply} reply - The reply object used to send responses.
 * @returns {Promise<void|import('fastify').FastifyReply>} Returns nothing if authentication succeeds, otherwise sends a 401 response.
 */
export async function auth(request, reply) {
  try {
    const rawToken = request.headers.authorization;
    if (!rawToken || !rawToken.startsWith("Bearer ")) {
      return reply.code(401).send({ message: "Unauthorized" });
    }

    /**
     * Extracts the JWT token from the raw authorization header string.
     * Assumes the header is in the format: "Bearer <token>".
     *
     * @type {string}
     * @example
     * // If rawToken = "Bearer abc123"
     * // token will be "abc123"
     */
    const token = rawToken.split(" ")[1];
    const decodedInfo = await verify(token, process.env.JWT_SECRET);
    request.user = decodedInfo;
    return;
  } catch (error) {
    return reply.code(401).send({ message: "Unauthorized" });
  }
}
