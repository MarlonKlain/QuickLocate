/**
 * Registers history-related routes with the Fastify instance.
 *
 * @param {import('fastify').FastifyInstance} fastify - The Fastify server instance.
 * @async
 *
 * @route GET /history
 * @group History - Operations about history changes
 * @security JWT
 * @returns {Object} 200 - List of history changes
 *
 * @route GET /history/by-date/:date
 * @group History - Operations about history changes
 * @param {string} date.path.required - Date to filter history changes (YYYY-MM-DD)
 * @security JWT
 * @returns {Object} 200 - List of history changes for the specified date
 */
import historyController from "../controllers/history.controller.js";
import { auth } from "./middleware/authentication.js";

export default async function historyRoutes(fastify) {
  fastify.get(
    "/history",
    { preHandler: auth },
    historyController.getHistoryChange
  );
  fastify.get(
    "/history/by-date/:date",
    { preHandler: auth },
    historyController.getHistoryChangeByDate
  );
}
