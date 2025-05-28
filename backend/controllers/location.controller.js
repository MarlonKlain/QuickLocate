/**
 * Controller for handling location-related requests.
 *
 * @namespace locationController
 * @property {Function} getLocations - Retrieves all locations from the location service and sends them in the response.
 * @property {Function} getFreeLocations - Handles the request to retrieve all free locations.
 */
import locationService from "../services/location.service.js";
import { handleError } from "../utils/handleError.js";

const locationController = {
  /**
   * Retrieves all locations from the location service and sends them in the response.
   *
   * @async
   * @function
   * @param {import('fastify').FastifyRequest} request - The incoming request object.
   * @param {import('fastify').FastifyReply} reply - The reply object used to send the response.
   * @returns {Promise<void>} Sends a response with the list of locations and a message.
   */
  async getLocations(request, reply) {
    try {
      const data = await locationService.getLocations();
      reply.code(200).send({
        data,
        message: "All locations returned.",
      });
    } catch (error) {
      handleError(reply, error);
    }
  },

  /**
   * Handles the request to retrieve all free locations.
   *
   * @async
   * @function
   * @param {import('fastify').FastifyRequest} request - The incoming HTTP request object.
   * @param {import('fastify').FastifyReply} reply - The HTTP reply object used to send the response.
   * @returns {Promise<void>} Sends a response with the list of free locations or an error message.
   */
  async getFreeLocations(request, reply) {
    try {
      const data = await locationService.getFreeLocations();
      reply.code(200).send({
        data,
        message: "All free locations returned.",
      });
    } catch (error) {
      handleError(reply, error);
    }
  },
};

export default locationController;
