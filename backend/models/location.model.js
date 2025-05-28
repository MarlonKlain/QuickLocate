import database from "../database/neon.js";
const locationModel = {
  /**
   * Retrieves a list of unique first characters from the 'location' field in the 'item' table.
   *
   * @async
   * @function
   * @returns {Promise<Array<{ first_character: string }>|null>} An array of objects containing unique first characters, or null if no results are found.
   * @throws {Error} Throws an error if the database query fails.
   */
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

  /**
   * Retrieves a list of free locations that are not currently assigned to any item.
   *
   * Executes a SQL query to select locations from the `item_location` table
   * that do not have a corresponding entry in the `item` table.
   *
   * @async
   * @returns {Promise<Array|Null>} A promise that resolves to an array of free locations,
   * or null if no result is found.
   * @throws {Error} If there is an error fetching data from the database.
   */
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
