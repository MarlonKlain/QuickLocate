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
