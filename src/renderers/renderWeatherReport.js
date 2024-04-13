/*
TODO
- Add loading spinner to the button
- Disable submit button when input field is empty
*/

import {
  DEFAULT_LOCATION,
  ELEMENT_DATA,
  ELEMENT_SELECTOR,
  FORM_FIELD
} from "../consts.js";
import {
  assertDefined,
  assertHTMLFormElement,
  assertNotNull
} from "../utils.js";
import {
  autocompleteQuery,
  currentConditionsQuery,
  dailyForecastsQuery
} from "../weather-api/index.js";
import { getAppStateStore } from "../local-storage/index.js";
import { renderCurrentConditions } from "./renderCurrentConditions.js";
import { renderDailyForecasts } from "./renderDailyForecasts.js";
import { renderLocationsList } from "./renderLocationsList.js";
import { renderNoLocations } from "./renderNoLocations.js";

/**
 * @param {Element} containerEl
 */
export function renderWeatherReport(containerEl, location = DEFAULT_LOCATION) {
  containerEl.innerHTML = /*html*/ `
    <!-- Search for location -->
    <form ${ELEMENT_DATA.searchForLocation} class="input-group">
      <input
        class="form-control"
        name="${FORM_FIELD.q}"
        type="text"
        placeholder="Search location"
      />
      <button class="btn btn-outline-secondary px-3">
        <i class="fa-solid fa-magnifying-glass fa-lg"></i>
      </button>
    </form>
    <!-- Search for location END -->

    <!-- Weather report container -->
    <div ${ELEMENT_DATA.weatherReportContainer} class="d-flex flex-column gap-4"></div>
    <!-- Weather report container END -->
  `;

  const searchForLocationEl = assertNotNull(
    containerEl.querySelector(ELEMENT_SELECTOR.searchForLocation)
  );

  const weatherReportContainerEl = assertNotNull(
    containerEl.querySelector(ELEMENT_SELECTOR.weatherReportContainer)
  );

  searchForLocationEl.addEventListener("submit", event => {
    event.preventDefault();

    const target = assertHTMLFormElement(assertNotNull(event.target));

    const data = new FormData(target);

    const q = data.get(FORM_FIELD.q);

    if (typeof q === "string" && q.length)
      autocompleteQuery(q)
        .then(response => {
          switch (response.length) {
            case 0:
              renderNoLocations(weatherReportContainerEl);
              break;

            case 1:
              loadWeatherReport(
                weatherReportContainerEl,
                assertDefined(response[0]),
                rerender
              );
              break;

            default:
              renderLocationsList(weatherReportContainerEl, response, key => {
                loadWeatherReport(weatherReportContainerEl, key, rerender);
              });
          }
        })
        .catch(error => {
          console.error("Error in renderWeatherReport:", error);
        });
  });

  loadWeatherReport(weatherReportContainerEl, location, rerender);

  function rerender() {
    renderWeatherReport(containerEl, location);
  }
}

/**
 * @param {Element} containerEl
 * @param {typeof import("../types.js").LocationType} location
 * @param {() => void} rerender
 */
function loadWeatherReport(containerEl, location, rerender) {
  const { getAppState } = getAppStateStore();

  const { metric } = getAppState();

  Promise.all([
    currentConditionsQuery(location.Key),
    dailyForecastsQuery(location.Key, metric)
  ])
    .then(([currentConditions, dailyForecasts]) => {
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
    })
    .catch(error => {
      console.error("Error in loadWeatherReport:", error);
    });
}
