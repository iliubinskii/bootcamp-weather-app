import { DEV_MODE } from "../consts.js";
import { mockResponses } from "../mocks/index.js";
import { assertDefined } from "../utils.js";

/**
 * @param {string} key
 * @returns {Promise<{
 *   DailyForecasts: Array<{
 *     Date: string,
 *     Day: {
 *       Icon: number,
 *       IconPhrase: string
 *     },
 *     Night: {
 *       Icon: number,
 *       IconPhrase: string
 *     },
 *     Temperature: {
 *       Minimum: { Unit: string, Value: number },
 *       Maximum: { Unit: string, Value: number }
 *     }
 *   }>
 * }>}
 */
export async function dailyForcastQuery(key) {
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
