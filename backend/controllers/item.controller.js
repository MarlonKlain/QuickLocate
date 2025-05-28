/**
 * Controller for handling item-related operations.
 *
 * @namespace itemController
 * @property {Function} getAllItemsAndFreeLocation - Retrieves all items along with their free locations.
 * @property {Function} getItemByCode - Retrieves item information and location history by item code.
 * @property {Function} getItemsByLocation - Retrieves items based on the specified location.
 * @property {Function} updateLocation - Updates the location of an item based on its code.
 * @property {Function} getItemWithoutLocation - Retrieves items that do not have an associated location.
 */
import itemService from "../services/item.service.js";
import { handleError } from "../utils/handleError.js";

const itemController = {
  /**
   * Retrieves all items along with their free locations.
   *
   * @async
   * @function getAllItemsAndFreeLocation
   * @param {import('fastify').FastifyRequest} request - The incoming HTTP request object.
   * @param {import('fastify').FastifyReply} reply - The HTTP reply object used to send responses.
   * @returns {Promise<void>} Sends a response with the list of items and their free locations.
   */
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

  /**
   * Retrieves item information and location history by item code.
   *
   * @async
   * @function
   * @param {import('fastify').FastifyRequest} request - The Fastify request object, containing route parameters.
   * @param {import('fastify').FastifyReply} reply - The Fastify reply object used to send the response.
   * @returns {Promise<void>} Sends a response with item information and location history, or handles errors.
   */
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

  /**
   * Retrieves items based on the specified location.
   *
   * @async
   * @function getItemsByLocation
   * @param {import('fastify').FastifyRequest} request - The Fastify request object, containing route parameters.
   * @param {import('fastify').FastifyReply} reply - The Fastify reply object used to send the response.
   * @returns {Promise<void>} Sends a response with the items found for the given location.
   */
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

  /**
   * Updates the location of an item based on its code.
   *
   * @async
   * @param {import('fastify').FastifyRequest} request - The Fastify request object containing the item code and new location in the body.
   * @param {import('fastify').FastifyReply} reply - The Fastify reply object used to send the response.
   * @returns {Promise<void>} Sends a response indicating the location was updated or handles errors.
   */
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

  /**
   * Retrieves items that do not have an associated location.
   *
   * @async
   * @function getItemWithoutLocation
   * @param {import('fastify').FastifyRequest} request - The incoming Fastify request object.
   * @param {import('fastify').FastifyReply} reply - The Fastify reply object used to send the response.
   * @returns {Promise<void>} Sends a response with a list of items without location or an error message.
   */
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
