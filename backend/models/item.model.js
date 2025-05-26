import database from "../database/neon.js";
const itemModel = {
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
