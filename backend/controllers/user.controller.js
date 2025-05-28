/**
 * Controller for handling user authentication and registration operations.
 *
 * @namespace userController
 * @property {Function} login - Handles user login and returns an authentication token.
 * @property {Function} register - Registers a new user with the provided data.
 * @property {Function} checkToken - Checks the validity of a user's authentication token.
 */
import userService from "../services/user.service.js";
import { handleError } from "../utils/handleError.js";

const userController = {
  /**
   * Handles user login.
   *
   * @async
   * @param {import('fastify').FastifyRequest} request - The incoming request object containing user credentials in the body.
   * @param {import('fastify').FastifyReply} reply - The reply object used to send the response.
   * @returns {Promise<void>} Sends a response with an authentication token if login is successful.
   * @throws Will handle errors using the handleError function.
   */
  async login(request, reply) {
    try {
      const userData = request.body;
      const authToken = await userService.login(userData);
      return reply.code(200).send({
        data: authToken,
        message: "Login successful",
      });
    } catch (error) {
      handleError(reply, error);
    }
  },

  /**
   * Registers a new user with the provided user data.
   *
   * @async
   * @param {import('fastify').FastifyRequest} request - The Fastify request object containing user data in the body.
   * @param {import('fastify').FastifyReply} reply - The Fastify reply object used to send the response.
   * @returns {Promise<void>} Sends a 201 response on successful registration or handles errors.
   */
  async register(request, reply) {
    try {
      const userData = request.body;
      await userService.register(userData);
      return reply.code(201).send({
        message: "Register successful",
      });
    } catch (error) {
      handleError(reply, error);
    }
  },

  /**
   * Checks the validity of a user's authentication token.
   *
   * @async
   * @param {import('fastify').FastifyRequest} request - The Fastify request object containing the token in the body.
   * @param {import('fastify').FastifyReply} reply - The Fastify reply object used to send the response.
   * @returns {Promise<void>} Sends a 200 response if authentication is successful, otherwise handles the error.
   */
  async checkToken(request, reply) {
    try {
      const token = request.body;
      await userService.checkToken(token);
      return reply.code(200).send({
        message: "Authentication successful",
      });
    } catch (error) {
      handleError(reply, error);
    }
  },
};

export default userController;
