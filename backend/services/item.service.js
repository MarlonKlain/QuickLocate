import itemModel from "../models/item.model.js";
import { sortArray } from "../utils/sorter.js";

const itemService = {
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
