import { assertDefined, delayedResolve } from "../utils.js";
import { DEV_MODE } from "../consts.js";
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
      return delayedResolve(mockResponses.autocomplete.singleResult);

    const locationAlt = assertDefined(
      mockResponses.autocomplete.singleResultAlt[0]
    );

    if (q === locationAlt.LocalizedName)
      return delayedResolve(mockResponses.autocomplete.singleResultAlt);

    return delayedResolve(
      mockResponses.autocomplete.multipleResults.filter(({ LocalizedName }) =>
        LocalizedName.startsWith(q)
      )
    );
  }

  return Promise.reject("Not implemented");
}
