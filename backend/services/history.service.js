import historyModel from "../models/history.model.js";

const historyService = {
  /**
   * Retrieves and formats the change history records.
   *
   * Fetches history data from the history model, formats the 'moved_at' date field
   * to 'pt-BR' locale as 'moved_date', and returns the formatted history array.
   *
   * @async
   * @returns {Promise<Array<Object>>} A promise that resolves to an array of formatted history records.
   * @throws {Error} If there is an error retrieving or formatting the history data.
   */
  async getHistoryChange() {
    try {
      const history = await historyModel.getHistoryChange();
      const formattedHistory = history.map((row) => ({
        ...row,
        moved_date: new Date(row.moved_at).toLocaleDateString("pt-BR"),
      }));

      return formattedHistory;
    } catch (error) {
      throw new Error(
        `Failed to handle change history. Error: ${error.message}`
      );
    }
  },

  /**
   * Retrieves the change history for a specific date.
   *
   * @async
   * @param {string|Date} date - The date for which to retrieve the change history.
   * @returns {Promise<any>} A promise that resolves to the change history for the given date.
   * @throws {Error} If there is an error retrieving the change history.
   */
  async getHistoryChangeByDate(date) {
    try {
      const result = await historyModel.getHistoryChangeByDate(date);
      return result;
    } catch (error) {
      throw new Error(
        `Failed to handle change history by date. Error: ${error.message}`
      );
    }
  },
};

export default historyService;
