import userService from "../services/user.service.js";
import { handleError } from "../utils/handleError.js";

const userController = {
  async login(request, reply) {
    try {
      const userData = request.body;
      const authToken = await userService.login(userData);
      return reply.code(200).send({
        data: authToken,
        message: "Login successful",
      });
    } catch (error) {
      handleError(reply, error);
    }
  },

  async register(request, reply) {
    try {
      const userData = request.body;
      await userService.register(userData);
      return reply.code(201).send({
        message: "Register successful",
      });
    } catch (error) {
      handleError(reply, error);
    }
  },

  async checkToken(request, reply) {
    try {
      const token = request.body;
      await userService.checkToken(token);
      return reply.code(200).send({
        message: "Authentication successful",
      });
    } catch (error) {
      handleError(reply, error);
    }
  },
};

export default userController;
