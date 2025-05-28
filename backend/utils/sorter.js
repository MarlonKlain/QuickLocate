/**
 * Sorts an array of objects by a specified property in ascending or descending order.
 *
 * @param {Object[]} array - The array of objects to sort.
 * @param {string} property - The property name to sort by.
 * @param {string} sortOrder - The sort order, either "ASC" for ascending or "DESC" for descending.
 * @returns {Object[]} The sorted array.
 */
export function sortArray(array, property, sortOrder) {
  if (sortOrder === "DESC") {
    array.sort((b, a) => {
      const propertyA = a[`${property}`].toUpperCase();
      const propertyB = b[`${property}`].toUpperCase();
      if (propertyA < propertyB) {
        return -1;
      }
      if (propertyA > propertyB) {
        return 1;
      }
      return 0;
    });

    return array;
  } else {
    array.sort((a, b) => {
      const propertyA = a[`${property}`].toUpperCase();
      const propertyB = b[`${property}`].toUpperCase();
      if (propertyA < propertyB) {
        return -1;
      }
      if (propertyA > propertyB) {
        return 1;
      }
      return 0;
    });
    return array;
  }
}
