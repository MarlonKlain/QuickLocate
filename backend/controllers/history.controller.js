import historyService from "../services/history.service.js";
import { handleError } from "../utils/handleError.js";

const historyController = {
  async getHistoryChange(request, reply) {
    try {
      const historyChange = await historyService.getHistoryChange();
      return reply.code(200).send({
        message: "History returned!",
        data: historyChange,
      });
    } catch (error) {
      handleError(reply, error);
    }
  },
  async getHistoryChangeByDate(request, reply) {
    try {
      const { date } = request.params;
      const historyChangeByDate =
        await historyService.getHistoryChangeByDate(date);
      return reply.code(200).send({
        message: `Changes made on ${date} were returned`,
        data: historyChangeByDate,
      });
    } catch (error) {
      handleError(reply, error);
    }
  },
};

export default historyController;
