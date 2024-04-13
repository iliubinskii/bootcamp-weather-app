import { DEV_MODE } from "../consts.js";
import { mockResponses } from "../mocks/index.js";
import { assertDefined } from "../utils.js";

/**
 * @param {string} key
 * @returns {Promise<{
 *   Temperature: {
 *     Imperial: { Unit: string, Value: number },
 *     Metric: { Unit: string, Value: number }
 *   },
 *   WeatherIcon: number,
 *   WeatherText: string
 * }>}
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
