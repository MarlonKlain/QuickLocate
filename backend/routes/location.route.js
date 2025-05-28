/**
 * Registers location-related routes with the Fastify instance.
 *
 * @param {import('fastify').FastifyInstance} fastify - The Fastify server instance.
 * @returns {Promise<void>} Resolves when the routes have been registered.
 *
 * @route GET /location - Retrieves all locations (requires authentication).
 * @route GET /location/free - Retrieves free locations (requires authentication).
 */
import locationController from "../controllers/location.controller.js";
import { auth } from "./middleware/authentication.js";

export default async function locationRoutes(fastify) {
  fastify.get(
    "/location",
    { preHandler: auth },
    locationController.getLocations
  );
  fastify.get(
    "/location/free",
    { preHandler: auth },
    locationController.getFreeLocations
  );
}
