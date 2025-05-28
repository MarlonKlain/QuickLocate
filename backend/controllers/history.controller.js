/**
 * Controller for handling history-related requests.
 *
 * @namespace historyController
 * @property {Function} getHistoryChange - Handles the request to retrieve all history changes.
 * @property {Function} getHistoryChangeByDate - Retrieves the history changes made on a specific date.
 */
import historyService from "../services/history.service.js";
import { handleError } from "../utils/handleError.js";

const historyController = {
  /**
   * Handles the request to retrieve history changes.
   *
   * @async
   * @function
   * @param {import('fastify').FastifyRequest} request - The incoming request object.
   * @param {import('fastify').FastifyReply} reply - The reply object used to send the response.
   * @returns {Promise<void>} Sends a response with the history change data or an error message.
   */
  async getHistoryChange(request, reply) {
    try {
      const historyChange = await historyService.getHistoryChange();
      return reply.code(200).send({
        message: "History returned!",
        data: historyChange,
      });
    } catch (error) {
      handleError(reply, error);
    }
  },
  /**
   * Retrieves the history changes made on a specific date.
   *
   * @async
   * @function getHistoryChangeByDate
   * @param {import('fastify').FastifyRequest} request - The Fastify request object, containing the date parameter.
   * @param {import('fastify').FastifyReply} reply - The Fastify reply object used to send the response.
   * @returns {Promise<void>} Sends a response with the changes made on the specified date or handles errors.
   */
  async getHistoryChangeByDate(request, reply) {
    try {
      const { date } = request.params;
      const historyChangeByDate = await historyService.getHistoryChangeByDate(
        date
      );
      return reply.code(200).send({
        message: `Changes made on ${date} were returned`,
        data: historyChangeByDate,
      });
    } catch (error) {
      handleError(reply, error);
    }
  },
};

export default historyController;
