import database from "../database/neon.js";
const locationModel = {
  async getLocations() {
    try {
      const result = await database`
            SELECT DISTINCT LEFT(location, 1) AS first_character
            FROM item
            ORDER BY first_character;
            `;
      if (!result) return null;
      return result;
    } catch (error) {
      throw new Error(
        `Failed to fetch data from the database. Error: ${error.message}`
      );
    }
  },

  async getFreeLocations() {
    try {
      const result = await database`
            SELECT il.location from 
            item_location il
            LEFT JOIN item i
            ON il.location = i.location
            WHERE i.location is null;
            `;
      if (!result) return null;
      return result;
    } catch (error) {
      throw new Error(
        `Failed to fetch data from the database. Error: ${error.message}`
      );
    }
  },
};

export default locationModel;
