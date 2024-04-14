import { API_ENDPOINT, API_KEY, API_LANGUAGE } from "../consts.js";
import { assertDefined, testDelay } from "../utils.js";
import { getAppStateStore } from "../local-storage/app-state-store.js";
import { mockResponses } from "../mocks/index.js";

/**
 * @param {string} q
 * @returns {Promise<typeof import("../types.js").LocationsType>}
 */
export async function autocompleteQuery(q) {
  if (q === "") return [];

  const { getAppState } = getAppStateStore();

  const { devMode } = getAppState();

  if (devMode) {
    await testDelay();

    const location = assertDefined(mockResponses.autocomplete.singleResult[0]);

    if (q === location.LocalizedName)
      return mockResponses.autocomplete.singleResult;

    const locationAlt = assertDefined(
      mockResponses.autocomplete.singleResultAlt[0]
    );

    if (q === locationAlt.LocalizedName)
      return mockResponses.autocomplete.singleResultAlt;

    return mockResponses.autocomplete.multipleResults.filter(
      ({ LocalizedName }) => LocalizedName.startsWith(q)
    );
  }

  const response = await fetch(
    `${API_ENDPOINT.autocomplete}?apikey=${API_KEY}&language=${API_LANGUAGE}&q=${encodeURIComponent(q)}`
  );

  const json = await response.json();

  if (Array.isArray(json)) return json;

  throw Error(`Invalid response`);
}
