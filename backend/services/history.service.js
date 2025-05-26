import historyModel from "../models/history.model.js";

const historyService = {
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
