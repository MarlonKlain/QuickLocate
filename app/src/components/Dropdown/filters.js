/**
 * Array of filter option objects for dropdown menus.
 * Each option contains a label for display and a value for filtering logic.
 * @type {{label: string, value: string}[]}
 */

export const filterOptions = [
  { label: "Code", value: "code" },
  { label: "Partnumber", value: "partnumber" },
  { label: "Description", value: "description" },
  { label: "Location", value: "location" },
];
/**
 * Array of sorter option objects for dropdown menus.
 * Each option contains a label for display and a value for sorting logic.
 * @type {{label: string, value: string}[]}
 */

export const sorterOptions = [
  { label: "Ascending Order", value: "ASC" },
  { label: "Descending Order", value: "DESC" },
];
