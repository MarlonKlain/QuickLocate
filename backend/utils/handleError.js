/**
 * Handles errors by sending an HTTP response with the appropriate status code and error message.
 *
 * @param {import('fastify').FastifyReply} reply - The Fastify reply object used to send the response.
 * @param {Error & { statusCode?: number }} error - The error object, optionally containing a statusCode property.
 */
export function handleError(reply, error) {
  const status = error.statusCode || 500;
  reply.code(status).send({ message: error.message });
}
