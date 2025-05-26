import itemService from "../services/item.service.js";
import { handleError } from "../utils/handleError.js";

const itemController = {
  async getAllItemsAndFreeLocation(request, reply) {
    try {
      const result = await itemService.getAllItemsAndFreeLocation();
      return reply
        .code(200)
        .send({ data: result, message: "Items's List returned!" });
    } catch (error) {
      handleError(reply, error);
    }
  },

  async getItemByCode(request, reply) {
    try {
      const { code } = request.params;
      const result = await itemService.getItemByCode(code);
      return reply.code(200).send({
        message: "Request Returned",
        data: {
          itemInformation: result.itemInformation,
          locationHistory: result.changeHistory,
        },
      });
    } catch (error) {
      handleError(reply, error);
    }
  },

  async getItemsByLocation(request, reply) {
    try {
      const { location } = request.params;
      const result = await itemService.getItemsByLocation(location);
      return reply.code(200).send({
        message: "Items were returned based on location",
        data: result,
      });
    } catch (error) {
      handleError(reply, error);
    }
  },

  async updateLocation(request, reply) {
    try {
      const { code, newLocation } = request.body;
      await itemService.updateLocation(code, newLocation);
      return reply.code(200).send({
        message: "The new location was updated!",
      });
    } catch (error) {
      handleError(reply, error);
    }
  },

  async getItemWithoutLocation(request, reply) {
    try {
      const itemsWithoutLocation = await itemService.getItemWithoutLocation();
      return reply.code(200).send({
        message: "Items not addressed were returned!",
        data: itemsWithoutLocation,
      });
    } catch (error) {
      handleError(reply, error);
    }
  },
};

export default itemController;
