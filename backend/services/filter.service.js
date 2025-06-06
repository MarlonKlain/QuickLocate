import filterModel from "../models/filter.model.js";
import { sortArray } from "../utils/sorter.js";

const filterService = {
  /**
   * Filters and optionally sorts data based on the provided filter, column, and sorter.
   *
   * @async
   * @param {string} filter - The value to filter by.
   * @param {string} column - The column to apply the filter on. Valid values: "code", "partnumber", "description", "location".
   * @param {string} [sorter] - Optional. The sorting order, either "ASC" or "DESC". Defaults to "ASC" if not provided.
   * @returns {Promise<Array>} The filtered (and optionally sorted) data.
   * @throws {Error} If filter or column is not provided, or if an invalid column is specified.
   */
  async filter(filter, column, sorter) {
    if (!filter || !column) {
      throw new Error("Filter and column must be provided.");
    }

    let data;
    switch (column) {
      case "code":
        data = await filterModel.filterByCode(filter);
        break;
      case "partnumber":
        data = await filterModel.filterByPartNumber(filter);
        break;
      case "description":
        data = await filterModel.filterByDescription(filter);
        break;
      case "location":
        data = await filterModel.filterByLocation(filter);
        break;
      default:
        throw new Error(`Invalid filter column: ${column}`);
    }

    if (!sorter) {
      //if sorter is not selected it will return the data without sorting
      return data;
    } else if (sorter === "DESC") {
      const sortedData = sortArray(data, column, "DESC");
      return sortedData;
    } else {
      const sortedData = sortArray(data, column, "ASC");
      return sortedData;
    }
  },
};

export default filterService;
