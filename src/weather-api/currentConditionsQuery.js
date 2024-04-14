/*
TODO
- Why this API returns an array
*/

import { assertDefined, delayedResolve } from "../utils.js";
import { DEV_MODE } from "../consts.js";
import { mockResponses } from "../mocks/index.js";

/**
 * @param {string} key
 * @returns {Promise<typeof import("../types.js").CurrentConditionsType>}
 */
export async function currentConditionsQuery(key) {
  if (DEV_MODE) {
    const location = assertDefined(mockResponses.autocomplete.singleResult[0]);

    if (location.Key === key)
      return delayedResolve(
        assertDefined(mockResponses.currentConditions.minimal[0])
      );

    const locationAlt = assertDefined(
      mockResponses.autocomplete.singleResultAlt[0]
    );

    if (locationAlt.Key === key)
      return delayedResolve(
        assertDefined(mockResponses.currentConditions.minimalAlt[0])
      );

    return Promise.reject(`Unknown key ${key}`);
  }

  return Promise.reject("Not implemented");
}
