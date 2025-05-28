import itemModel from "../models/item.model.js";
import { sortArray } from "../utils/sorter.js";

const itemService = {
  /**
   * Retrieves all items along with their associated free locations.
   *
   * @async
   * @function
   * @returns {Promise<Array>} A promise that resolves to an array of items and their free locations.
   * @throws {Error} If there is an error retrieving the items and free locations.
   */
  async getAllItemsAndFreeLocation() {
    try {
      const items = await itemModel.getAllItemsAndFreeLocation();
      return items;
    } catch (error) {
      throw new Error(
        `Failed to handle the list of items and free locations. Error: ${error.message}`
      );
    }
  },
  /**
   * Retrieves item information and its change history by item code.
   *
   * @async
   * @param {string} code - The unique code identifying the item.
   * @returns {Promise<{itemInformation: Object, changeHistory: Array}>} An object containing the item's information and its change history.
   * @throws {Error} If the code is not provided or if retrieval fails.
   */
  async getItemByCode(code) {
    try {
      if (!code) {
        throw new Error("Code must be provided!");
      }
      const result = await itemModel.getItemByCode(code);
      const itemInformation = {
        itemInformation: result.item,
        changeHistory: result.locationHistory,
      };
      return itemInformation;
    } catch (error) {
      throw new Error(
        `Failed to handle item's information. Error: ${error.message}`
      );
    }
  },

  /**
   * Retrieves and returns a sorted list of items for a given location.
   *
   * @async
   * @param {string} location - The location to filter items by. Must be provided.
   * @returns {Promise<Array<Object>>} A promise that resolves to an array of items sorted by location in ascending order.
   * @throws {Error} If the location is not provided or if retrieval fails.
   */
  async getItemsByLocation(location) {
    try {
      if (!location) {
        throw new Error("location must be provided!");
      }
      const items = await itemModel.getItemsByLocation(location);
      const itemsListSorted = sortArray(items, "location", "ASC");
      return itemsListSorted;
    } catch (error) {
      throw new Error(
        `Failed to handle the retrieve list of items by location. Error: ${error.message}`
      );
    }
  },

  /**
   * Updates the location of an item identified by its code.
   *
   * @async
   * @param {string} code - The unique code identifying the item.
   * @param {string} newLocation - The new location to assign to the item.
   * @throws {Error} If the code is not provided.
   * @throws {Error} If no item is found with the given code.
   * @throws {Error} If the new location is the same as the current location.
   * @throws {Error} If the update operation fails.
   * @returns {Promise<void>} Resolves when the location is successfully updated.
   */
  async updateLocation(code, newLocation) {
    try {
      if (!code) {
        throw new Error("Code must be provided!");
      }

      const itemInfo = await this.getItemByCode(code);
      if (!itemInfo.itemInformation) {
        throw new Error(`No item found with code: ${code}`);
      }

      if (itemInfo.itemInformation.location === newLocation) {
        throw new Error(
          "The actual location must be different then the previous one"
        );
      }

      await itemModel.updateLocation(code, newLocation);
    } catch (error) {
      throw new Error(
        `Failed to handle the update of location. Error: ${error.message}`
      );
    }
  },

  /**
   * Retrieves items that do not have an associated location.
   *
   * @async
   * @function getItemWithoutLocation
   * @returns {Promise<Array<Object>>} A promise that resolves to an array of items without location.
   * @throws {Error} If retrieval fails, throws an error with a descriptive message.
   */
  async getItemWithoutLocation() {
    try {
      const items = await itemModel.getItemWithoutLocation();
      return items;
    } catch (error) {
      throw new Error(
        `Failed to handle the retrieve of items not addressed. Error: ${error.message}`
      );
    }
  },
};

export default itemService;
