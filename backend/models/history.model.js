import database from "../database/neon.js";

const historyModel = {
  /**
   * Retrieves a list of unique item location history changes, grouped by date.
   * Each entry represents the latest change for a specific date.
   *
   * @async
   * @function
   * @returns {Promise<Array<{id: number, moved_at: string}>>}
   *   A promise that resolves to an array of history records, each containing an `id` and `moved_at` timestamp.
   * @throws {Error} If the history cannot be loaded.
   */
  async getHistoryChange() {
    try {
      const history = await database`
      SELECT DISTINCT ON (moved_at::date) 
      id, 
      moved_at
      FROM item_location_history
      ORDER BY moved_at::date DESC, moved_at DESC;
      `;
      return history;
    } catch (error) {
      throw new Error(`Failed to load change history. Error: ${error.message}`);
    }
  },

  /**
   * Retrieves the item location change history for a specific date.
   *
   * @async
   * @function
   * @param {string} date - The date (in 'YYYY-MM-DD' format) to filter the history records by.
   * @returns {Promise<Array<Object>>} A promise that resolves to an array of history records, each including item details.
   * @throws {Error} If there is an error while loading the change history.
   */
  async getHistoryChangeByDate(date) {
    try {
      const result = await database`
      SELECT 
      h.*, 
      i.partnumber, 
      i.description
      FROM item_location_history h
      JOIN item i ON h.item_code = i.code
      WHERE h.moved_at::date = ${date};
      `;
      return result;
    } catch (error) {
      throw new Error(
        `Failed to load change history by date. Error: ${error.message}`
      );
    }
  },
};

export default historyModel;
