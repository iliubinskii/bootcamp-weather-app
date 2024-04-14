import { ELEMENT_DATA, ELEMENT_SELECTOR } from "../consts.js";
import {
  currentConditionsQuery,
  dailyForecastsQuery
} from "../weather-api/index.js";
import { assertNotNull } from "../utils.js";
import { getAppStateStore } from "../local-storage/index.js";
import { renderCurrentConditions } from "./renderCurrentConditions.js";
import { renderDailyForecasts } from "./renderDailyForecasts.js";

/**
 * @param {Element} containerEl
 * @param {typeof import("../types.js").LocationType} location
 * @param {() => Promise<void>} rerender
 * @returns {Promise<void>}
 */
export async function renderWeatherReport(containerEl, location, rerender) {
  const { getAppState, setLocation } = getAppStateStore();

  const { metric } = getAppState();

  setLocation(location);

  const [currentConditions, dailyForecasts] = await Promise.all([
    currentConditionsQuery(location.Key),
    dailyForecastsQuery(location.Key, metric)
  ]);

  containerEl.innerHTML = /*html*/ `
    <!-- Current conditions -->
    <div
      ${ELEMENT_DATA.currentConditionsContainer}
      class="d-flex flex-column gap-4"
    ></div>
    <!-- Current conditions END -->

    <!-- Daily forecasts -->
    <div
      ${ELEMENT_DATA.dailyForecastsContainer}
      class="d-flex flex-column gap-4"
    ></div>
    <!-- Daily forecasts END -->
  `;

  const currentConditionsContainerEl = assertNotNull(
    containerEl.querySelector(ELEMENT_SELECTOR.currentConditionsContainer)
  );

  const dailyForecastsContainerEl = assertNotNull(
    containerEl.querySelector(ELEMENT_SELECTOR.dailyForecastsContainer)
  );

  renderCurrentConditions(
    currentConditionsContainerEl,
    location,
    currentConditions,
    rerender
  );

  renderDailyForecasts(dailyForecastsContainerEl, dailyForecasts);
}
