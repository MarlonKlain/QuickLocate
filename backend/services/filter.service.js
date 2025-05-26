import filterModel from "../models/filter.model.js";
import { sortArray } from "../utils/sorter.js";

const filterService = {
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
