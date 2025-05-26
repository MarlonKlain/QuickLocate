import filterController from "../controllers/filter.controller.js";
import { auth } from "./middleware/authentication.js";

export default function filterRoutes(fastify) {
  fastify.get("/filter", { preHandler: auth }, filterController.filter);
}
