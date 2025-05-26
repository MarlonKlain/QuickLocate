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
