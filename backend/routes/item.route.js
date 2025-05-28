/**
 * Registers item-related routes with the Fastify instance.
 *
 * @param {import('fastify').FastifyInstance} fastify - The Fastify server instance.
 * @returns {Promise<void>} Resolves when the routes are registered.
 *
 * @route GET /item - Retrieves all items and free locations. Requires authentication.
 * @route GET /item/by-code/:code - Retrieves an item by its code. Requires authentication.
 * @route GET /item/by-location/:location - Retrieves items by location. Requires authentication.
 * @route PUT /item/update-location - Updates the location of an item. Requires authentication.
 * @route GET /item/not-addressed - Retrieves items without a location. Requires authentication.
 */
import itemController from "../controllers/item.controller.js";
import { auth } from "./middleware/authentication.js";

export default async function itemRoutes(fastify) {
  fastify.get(
    "/item",
    { preHandler: auth },
    itemController.getAllItemsAndFreeLocation
  );
  fastify.get(
    "/item/by-code/:code",
    { preHandler: auth },
    itemController.getItemByCode
  );
  fastify.get(
    "/item/by-location/:location",
    { preHandler: auth },
    itemController.getItemsByLocation
  );
  fastify.put(
    "/item/update-location",
    { preHandler: auth },
    itemController.updateLocation
  );
  fastify.get(
    "/item/not-addressed",
    { preHandler: auth },
    itemController.getItemWithoutLocation
  );
}
