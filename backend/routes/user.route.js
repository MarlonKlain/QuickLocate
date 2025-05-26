import userController from "../controllers/user.controller.js";

export default async function userRoutes(fastify) {
  fastify.post("/login", userController.login);
  fastify.post("/register", userController.register);
  fastify.post("/check-token", userController.checkToken);
}
