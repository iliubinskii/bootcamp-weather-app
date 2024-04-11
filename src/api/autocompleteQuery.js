import { DEV_MODE } from "../consts.js";
import { mockResponses } from "../mocks/index.js";

/**
 * @param {string} q
 * @returns {Promise<Array<{
 *   Country: { LocalizedName: string },
 *   Key: string,
 *   LocalizedName: string
 * }>>}
 */
export async function autocompleteQuery(q) {
  if (DEV_MODE) {
    if (q === "Tel")
      return Promise.resolve(mockResponses.autocomplete.multipleResults);

    if (q === "Tel Aviv")
      return Promise.resolve(mockResponses.autocomplete.singleResult);

    if (q === "Timbuktu")
      return Promise.resolve(mockResponses.autocomplete.singleResultAlt);

    return Promise.resolve(mockResponses.autocomplete.noResults);
  }

  /*
  TODO
  - Write real query
  */
  return Promise.reject("Not implemented");
}
