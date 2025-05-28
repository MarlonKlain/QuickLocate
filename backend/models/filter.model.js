import database from "../database/neon.js";

const filterModel = {
  /**
   * Retrieves items from the database whose code matches the specified filter.
   * Performs a RIGHT JOIN between the 'item' and 'item_location' tables based on location.
   *
   * @async
   * @param {string} filter - The code filter to match items against (prefix match).
   * @returns {Promise<Array<Object>>} A promise that resolves to an array of matching items with their locations.
   */
  async filterByCode(filter) {
    return await database`
      SELECT * FROM item i
      RIGHT JOIN item_location il
      ON i.location = il.location
      WHERE i.code LIKE ${filter + "%"}
    `;
  },

  /**
   * Retrieves items from the database whose part numbers match the given filter.
   * Performs a RIGHT JOIN between the 'item' and 'item_location' tables based on location.
   *
   * @async
   * @function
   * @param {string} filter - The part number filter to match (prefix search).
   * @returns {Promise<Array<Object>>} A promise that resolves to an array of matching item records.
   */
  async filterByPartNumber(filter) {
    return await database`
      SELECT * FROM item i
      RIGHT JOIN item_location il
      ON i.location = il.location
      WHERE i.partnumber LIKE ${filter + "%"}
    `;
  },

  /**
   * Retrieves items from the database whose descriptions start with the specified filter string.
   * Performs a RIGHT JOIN between the 'item' and 'item_location' tables on the 'location' field.
   *
   * @async
   * @param {string} filter - The string to filter item descriptions by (prefix match).
   * @returns {Promise<Array<Object>>} A promise that resolves to an array of matching item records.
   */
  async filterByDescription(filter) {
    return await database`
      SELECT * FROM item i
      RIGHT JOIN item_location il
      ON i.location = il.location
      WHERE i.description LIKE ${filter + "%"}
    `;
  },

  /**
   * Filters items by their location using a SQL LIKE query.
   *
   * @async
   * @function
   * @param {string} filter - The location filter string. Items with locations starting with this value will be returned.
   * @returns {Promise<Array<Object>>} A promise that resolves to an array of items matching the location filter.
   */
  async filterByLocation(filter) {
    return await database`
      SELECT * FROM item i
      RIGHT JOIN item_location il
      ON i.location = il.location
      WHERE i.location LIKE ${filter + "%"}
    `;
  },
};

export default filterModel;
