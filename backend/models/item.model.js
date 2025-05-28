import database from "../database/neon.js";
const itemModel = {
  /**
   * Retrieves all items along with their associated locations, including locations that may not have any items assigned.
   * Utilizes a RIGHT JOIN between the 'item' and 'item_location' tables to include all locations, even those without items.
   *
   * @async
   * @function
   * @returns {Promise<Array<Object>>} A promise that resolves to an array of objects representing items and their locations.
   * @throws {Error} If there is an error while fetching the data from the database.
   */
  async getAllItemsAndFreeLocation() {
    try {
      const items = await database`
      SELECT * FROM item i
      RIGHT JOIN item_location il
      ON i.location = il.location;
      `;
      return items;
    } catch (error) {
      throw new Error(
        `Failed to load the list of items and free locations. Error: ${error.message}`
      );
    }
  },

  /**
   * Retrieves an item by its code along with its location history.
   *
   * @async
   * @function getItemByCode
   * @param {string|number} code - The unique code identifying the item.
   * @returns {Promise<{ item: Object, locationHistory: Array<{ location: string, moved_at: string }> }>}
   * An object containing the item details and its location history.
   * @throws {Error} If there is an error loading the item's information.
   */
  async getItemByCode(code) {
    try {
      const [item] = await database`
        SELECT * FROM item 
        WHERE code = ${code}
        `;
      const locationHistory = await database`
        SELECT location, moved_at
        FROM item_location_history
        WHERE item_code = ${code}
        ORDER BY moved_at
        `;
      return { item, locationHistory };
    } catch (error) {
      throw new Error(
        `Failed to load item's information. Error: ${error.message}`
      );
    }
  },

  /**
   * Retrieves a list of items from the database that match the specified location.
   *
   * Performs a RIGHT JOIN between the 'item' and 'item_location' tables based on the location,
   * and filters the results where the location starts with the provided value.
   *
   * @async
   * @param {string} location - The location string to filter items by (prefix match).
   * @returns {Promise<Array<Object>>} A promise that resolves to an array of item objects.
   * @throws {Error} If there is an error retrieving the items from the database.
   */
  async getItemsByLocation(location) {
    try {
      const items = await database`
      SELECT * FROM item i
      RIGHT JOIN item_location il
      ON i.location = il.location
      WHERE il.location LIKE ${location + "%"}
      `;
      return items;
    } catch (error) {
      throw new Error(
        `Failed to retrieve the list of items by location. Error: ${error.message}`
      );
    }
  },

  /**
   * Updates the location of an item identified by its code.
   *
   * This method performs the following steps within a transaction:
   * 1. Inserts the new location into the `item_location` table if it does not already exist.
   * 2. Updates the item's location in the `item` table.
   * 3. Inserts a record into the `item_location_history` table to track the change.
   *
   * If any step fails, the transaction is rolled back.
   *
   * @async
   * @param {string|number} code - The unique code identifying the item to update.
   * @param {string} newLocation - The new location to assign to the item.
   * @throws {Error} Throws an error if the update process fails.
   */
  async updateLocation(code, newLocation) {
    try {
      await database`BEGIN;`;

      // Insert the new location if it doesn't exist
      await database`
      INSERT INTO item_location (location)
      SELECT ${newLocation}
      WHERE NOT EXISTS (
        SELECT 1 FROM item_location WHERE location = ${newLocation}
      );
    `;

      // Update the item's location
      await database`
      UPDATE item
      SET location = ${newLocation}
      WHERE code = ${code};
    `;

      // Insert into history
      await database`
      INSERT INTO item_location_history (item_code, location)
      VALUES (${code}, ${newLocation});
    `;

      await database`COMMIT;`;
    } catch (error) {
      await database`ROLLBACK;`;
      throw new Error(
        `Failed to update the location in the database. Error: ${error.message}`
      );
    }
  },

  /**
   * Retrieves all items from the database that do not have a location assigned.
   *
   * @async
   * @function
   * @returns {Promise<Array<Object>>} A promise that resolves to an array of item objects without a location.
   * @throws {Error} If there is an error retrieving the items from the database.
   */
  async getItemWithoutLocation() {
    try {
      const items = await database`
      SELECT * FROM item
      WHERE location = '' or location IS NULL
      `;

      return items;
    } catch (error) {
      throw new Error(
        `Failed to retrieve the list of items not addressed. Error: ${error.message}`
      );
    }
  },
};

export default itemModel;
