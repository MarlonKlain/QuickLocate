import filterService from "../services/filter.service.js";
import { handleError } from "../utils/handleError.js";

const filterController = {
  async filter(request, reply) {
    try {
      const filter = request.query.filter;
      const column = request.query.column;
      const sorter = request.query.sorter;
      const dataFiltered = await filterService.filter(filter, column, sorter);
      reply
        .code(200)
        .send({ message: "The data was returned", data: dataFiltered });
    } catch (error) {
      handleError(reply, error);
    }
  },
};

export default filterController;
