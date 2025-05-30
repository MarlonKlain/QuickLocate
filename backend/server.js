import fastify from "fastify";
import cors from "@fastify/cors";
import routes from "./routes/index.route.js";
const server = fastify({
  logger: true,
});

server.register(routes);
server.register(cors, {
  // Allows requests from any domain
  // origin: "*",
  // List specific allowed domains
  origin: ["*"],
  // Specifies allowed HTTP verbs
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
});

// Global error handler
server.setErrorHandler((error, request, reply) => {
  // Log error details (you can use a logging service here)
  request.log.error(error);

  // If the error has a statusCode, use it, otherwise default to 500s
  const statusCode = error.statusCode || 500;

  // Return a user-friendly message
  reply.status(statusCode).send({
    message: error.message || "An unexpected error occurred",
  });
});

// Run the server!
try {
  await server.listen({ host: "0.0.0.0", port: process.env.PORT ?? 3000 });
} catch (err) {
  server.log.error(err);
  process.exit(1);
}
