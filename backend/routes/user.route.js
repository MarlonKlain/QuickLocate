/**
 * Registers user-related routes for authentication and user management.
 *
 * @param {import('fastify').FastifyInstance} fastify - The Fastify instance to register routes on.
 * @async
 * @function
 * @exports
 *
 * @route POST /login - Handles user login.
 * @route POST /register - Handles user registration.
 * @route POST /check-token - Checks the validity of a user's token.
 */
import userController from "../controllers/user.controller.js";

export default async function userRoutes(fastify) {
  fastify.post("/login", userController.login);
  fastify.post("/register", userController.register);
  fastify.post("/check-token", userController.checkToken);
}
