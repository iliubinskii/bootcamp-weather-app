import { DEV_MODE } from "../consts.js";
import { assertDefined } from "../utils.js";
import { mockResponses } from "../mocks/index.js";

/**
 * @param {string} key
 * @returns {Promise<typeof import("../types.js").DailyForecastsType>}
 */
export async function dailyForecastsQuery(key) {
  if (DEV_MODE) {
    const location = assertDefined(mockResponses.autocomplete.singleResult[0]);

    if (location.Key === key)
      return Promise.resolve(mockResponses.daily5.minimal);

    const locationAlt = assertDefined(
      mockResponses.autocomplete.singleResultAlt[0]
    );

    if (locationAlt.Key === key)
      return Promise.resolve(mockResponses.daily5.minimalAlt);

    return Promise.reject(`Unknown key ${key}`);
  }

  /*
  TODO
  - Write real query
  - Find a solution for requesting C instead of F for temperature
  */
  return Promise.reject("Not implemented");
}
