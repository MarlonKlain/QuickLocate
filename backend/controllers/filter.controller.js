/**
 * Controller for handling filter-related requests.
 *
 * @namespace filterController
 */

/**
 * Handles filtering of data based on query parameters.
 *
 * @async
 * @function
 * @memberof filterController
 * @param {import('fastify').FastifyRequest} request - The incoming request object, expects `filter`, `column`, and `sorter` in query.
 * @param {import('fastify').FastifyReply} reply - The reply object used to send the response.
 * @returns {Promise<void>} Sends a response with filtered data or an error message.
 */
import filterService from "../services/filter.service.js";
import { handleError } from "../utils/handleError.js";

const filterController = {
  async filter(request, reply) {
    try {
      const filter = request.query.filter;
      const column = request.query.column;
      const sorter = request.query.sorter;
      const dataFiltered = await filterService.filter(filter, column, sorter);
      reply
        .code(200)
        .send({ message: "The data was returned", data: dataFiltered });
    } catch (error) {
      handleError(reply, error);
    }
  },
};

export default filterController;
