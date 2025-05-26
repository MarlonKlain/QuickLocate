export function handleError(reply, error) {
  const status = error.statusCode || 500;
  reply.code(status).send({ message: error.message });
}
