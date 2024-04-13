import { DEV_MODE } from "../consts.js";
import { assertDefined } from "../utils.js";
import { mockResponses } from "../mocks/index.js";

/**
 * @param {string} q
 * @returns {Promise<typeof import("../types.js").LocationsType>}
 */
export async function autocompleteQuery(q) {
  if (q === "") return [];

  if (DEV_MODE) {
    const location = assertDefined(mockResponses.autocomplete.singleResult[0]);

    if (q === location.LocalizedName)
      return Promise.resolve(mockResponses.autocomplete.singleResult);

    const locationAlt = assertDefined(
      mockResponses.autocomplete.singleResultAlt[0]
    );

    if (q === locationAlt.LocalizedName)
      return Promise.resolve(mockResponses.autocomplete.singleResultAlt);

    return Promise.resolve(
      mockResponses.autocomplete.multipleResults.filter(({ LocalizedName }) =>
        LocalizedName.startsWith(q)
      )
    );
  }

  /*
  TODO
  - Write real query
  */
  return Promise.reject("Not implemented");
}
