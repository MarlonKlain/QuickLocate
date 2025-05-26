import database from "../database/neon.js";

const filterModel = {
  async filterByCode(filter) {
    return await database`
      SELECT * FROM item i
      RIGHT JOIN item_location il
      ON i.location = il.location
      WHERE i.code LIKE ${filter + "%"}
    `;
  },

  async filterByPartNumber(filter) {
    return await database`
      SELECT * FROM item i
      RIGHT JOIN item_location il
      ON i.location = il.location
      WHERE i.partnumber LIKE ${filter + "%"}
    `;
  },

  async filterByDescription(filter) {
    return await database`
      SELECT * FROM item i
      RIGHT JOIN item_location il
      ON i.location = il.location
      WHERE i.description LIKE ${filter + "%"}
    `;
  },

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
