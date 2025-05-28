/**
 * Registers all application routes with the Fastify instance.
 *
 * @param {import('fastify').FastifyInstance} fastify - The Fastify server instance.
 * @param {Object} opts - Additional options for route registration.
 * @returns {Promise<void>} Resolves when all routes have been registered.
 */
import filterRoutes from "./filter.route.js";
import historyRoutes from "./history.route.js";
import itemRoutes from "./item.route.js";
import locationRoutes from "./location.route.js";
import userRoutes from "./user.route.js";

export default async function routes(fastify, opts) {
  fastify.register(userRoutes);
  fastify.register(itemRoutes);
  fastify.register(locationRoutes);
  fastify.register(filterRoutes);
  fastify.register(historyRoutes);
}
