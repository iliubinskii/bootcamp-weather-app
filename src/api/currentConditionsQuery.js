import { DEV_MODE } from "../consts.js";
import { assertDefined } from "../utils.js";
import { mockResponses } from "../mocks/index.js";

/**
 * @param {string} key
 * @returns {Promise<typeof import("../types.js").CurrentConditionsType>}
 */
export async function currentConditionsQuery(key) {
  if (DEV_MODE) {
    const location = assertDefined(mockResponses.autocomplete.singleResult[0]);

    if (location.Key === key)
      return Promise.resolve(
        assertDefined(mockResponses.currentConditions.minimal[0])
      );

    const locationAlt = assertDefined(
      mockResponses.autocomplete.singleResultAlt[0]
    );

    if (locationAlt.Key === key)
      return Promise.resolve(
        assertDefined(mockResponses.currentConditions.minimalAlt[0])
      );

    return Promise.reject(`Unknown key ${key}`);
  }

  /*
  TODO
  - Write real query
  - Figure out why this API returns an array and how to handle it
  */
  return Promise.reject("Not implemented");
}
