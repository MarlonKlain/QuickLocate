import locationModel from "../models/location.model.js";

const locationService = {
  /**
   * Retrieves a list of locations from the location model.
   *
   * @async
   * @function
   * @returns {Promise<Array>} A promise that resolves to an array of location objects. Returns an empty array if no locations are found.
   * @throws {Error} Throws an error if there is a failure in handling location data.
   */
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

  /**
   * Retrieves a list of free locations from the database.
   *
   * @async
   * @returns {Promise<Array>} A promise that resolves to an array of free location objects. Returns an empty array if no locations are found.
   * @throws {Error} If there is an error while fetching free locations.
   */
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
