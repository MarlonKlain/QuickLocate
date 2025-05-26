import locationModel from "../models/location.model.js";

const locationService = {
  async getLocations() {
    try {
      const result = await locationModel.getLocations();
      if (!result) {
        return [];
      }
      return result;
    } catch (error) {
      throw new Error(
        `Failed to handle location data. Error: ${error.message}`
      );
    }
  },

  async getFreeLocations() {
    try {
      const result = await locationModel.getFreeLocations();
      if (!result) {
        return [];
      }
      return result;
    } catch (error) {
      throw new Error(
        `Failed to handle free location data. Error: ${error.message}`
      );
    }
  },
};

export default locationService;
