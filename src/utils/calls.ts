/**
 *
 * @param queryParams
 * {
 *   key: value,
 *   key2: value2
 * }
 * @returns
 * "?key=value&key2=value2"
 */

export interface IQueryParams {
  [key: string]: string | number | boolean;
}

const addQueryParams = (queryParams: IQueryParams) => {
  if (Object.keys(queryParams).length === 0) return "";
  let query = "?";
  query += Object.keys(queryParams)
    .map((key) => {
      return queryParams[key] !== undefined
        ? `${key}=${queryParams[key]}`
        : null;
    })
    .filter((value) => value !== null) // Filter out null values
    .join("&");
  return query;
};

export { addQueryParams };
