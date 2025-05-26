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
