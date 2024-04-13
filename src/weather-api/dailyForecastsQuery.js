import { DEV_MODE } from "../consts.js";
import { assertDefined } from "../utils.js";
import { mockResponses } from "../mocks/index.js";

/**
 * @param {string} key
 * @param {boolean} metric
 * @returns {Promise<typeof import("../types.js").DailyForecastsType>}
 */
export async function dailyForecastsQuery(key, metric) {
  if (DEV_MODE) {
    const location = assertDefined(mockResponses.autocomplete.singleResult[0]);

    if (location.Key === key)
      return Promise.resolve(
        metric
          ? mockResponses.daily5.minimalMetric
          : mockResponses.daily5.minimal
      );

    const locationAlt = assertDefined(
      mockResponses.autocomplete.singleResultAlt[0]
    );

    if (locationAlt.Key === key)
      return Promise.resolve(
        metric
          ? mockResponses.daily5.minimalMetricAlt
          : mockResponses.daily5.minimalAlt
      );

    return Promise.reject(`Unknown key ${key}`);
  }

  /*
  TODO
  - Write real query
  - Find a solution for requesting C instead of F for temperature
  */
  return Promise.reject("Not implemented");
}
