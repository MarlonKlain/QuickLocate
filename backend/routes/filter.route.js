/**
 * Registers filter-related routes with the Fastify instance.
 *
 * @param {import('fastify').FastifyInstance} fastify - The Fastify server instance.
 *
 * Registers the following route:
 *   GET /filter - Protected by authentication middleware, handled by filterController.filter.
 */
import filterController from "../controllers/filter.controller.js";
import { auth } from "./middleware/authentication.js";

export default function filterRoutes(fastify) {
  fastify.get("/filter", { preHandler: auth }, filterController.filter);
}
