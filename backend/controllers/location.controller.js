import locationService from "../services/location.service.js";
import { handleError } from "../utils/handleError.js";

const locationController = {
  async getLocations(request, reply) {
    try {
      const data = await locationService.getLocations();
      reply.code(200).send({
        data,
        message: "All locations returned.",
      });
    } catch (error) {
      handleError(reply, error);
    }
  },

  async getFreeLocations(request, reply) {
    try {
      const data = await locationService.getFreeLocations();
      reply.code(200).send({
        data,
        message: "All free locations returned.",
      });
    } catch (error) {
      handleError(reply, error);
    }
  },
};

export default locationController;
