import { API_ENDPOINT, API_KEY, API_LANGUAGE, DEV_MODE } from "../consts.js";
import { assertDefined, delayedResolve } from "../utils.js";
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
      return delayedResolve(
        metric
          ? mockResponses.daily5.minimalMetric
          : mockResponses.daily5.minimal
      );

    const locationAlt = assertDefined(
      mockResponses.autocomplete.singleResultAlt[0]
    );

    if (locationAlt.Key === key)
      return delayedResolve(
        metric
          ? mockResponses.daily5.minimalMetricAlt
          : mockResponses.daily5.minimalAlt
      );

    return Promise.reject(`Unknown key ${key}`);
  }

  const detailsStr = "false";

  const metricStr = metric ? "true" : "false";

  const response = await fetch(
    `${API_ENDPOINT.daily5}/${key}?apikey=${API_KEY}&language=${API_LANGUAGE}&details=${detailsStr}&metric=${metricStr}`
  );

  const json = await response.json();

  if (typeof json === "object") return json;

  throw Error(`Invalid response`);
}
