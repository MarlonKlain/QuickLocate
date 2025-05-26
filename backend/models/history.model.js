import { defaults } from "@neondatabase/serverless";
import database from "../database/neon.js";
const historyModel = {
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
