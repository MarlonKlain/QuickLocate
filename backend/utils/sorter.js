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
