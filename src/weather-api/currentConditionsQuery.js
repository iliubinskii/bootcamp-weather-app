/*
TODO
- Why this API returns an array
*/

import { API_ENDPOINT, API_KEY, API_LANGUAGE, DEV_MODE } from "../consts.js";
import { assertDefined, testDelay } from "../utils.js";
import { mockResponses } from "../mocks/index.js";

/**
 * @param {string} key
 * @returns {Promise<typeof import("../types.js").CurrentConditionsType>}
 */
export async function currentConditionsQuery(key) {
  if (DEV_MODE) {
    await testDelay();

    const location = assertDefined(mockResponses.autocomplete.singleResult[0]);

    if (location.Key === key)
      return assertDefined(mockResponses.currentConditions.minimal[0]);

    const locationAlt = assertDefined(
      mockResponses.autocomplete.singleResultAlt[0]
    );

    if (locationAlt.Key === key)
      return assertDefined(mockResponses.currentConditions.minimalAlt[0]);

    return Promise.reject(`Unknown key ${key}`);
  }

  const detailsStr = "false";

  const response = await fetch(
    `${API_ENDPOINT.currentConditions}/${key}?apikey=${API_KEY}&language=${API_LANGUAGE}&details=${detailsStr}`
  );

  const json = await response.json();

  if (Array.isArray(json) && json.length) return json[0];

  throw Error(`Invalid response`);
}
