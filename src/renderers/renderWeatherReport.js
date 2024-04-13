/*
TODO
- Add loading spinner to the button
- Disable submit button when input field is empty
- Allow to reload the weather report for the same location
*/

import {
  DEFAULT_LOCATION_KEY,
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
} from "../api/index.js";
import { renderCurrentConditions } from "./renderCurrentConditions.js";
import { renderDailyForecasts } from "./renderDailyForecasts.js";
import { renderLocationsList } from "./renderLocationsList.js";
import { renderNoLocations } from "./renderNoLocations.js";

/**
 * @param {Element} containerEl
 */
export function renderWeatherReport(containerEl, key = DEFAULT_LOCATION_KEY) {
  containerEl.innerHTML = /*html*/ `
    <div>
      <!-- Search for location -->
      <form ${ELEMENT_DATA.searchForLocation}>
        <input type="text" name="${FORM_FIELD.q}" placeholder="Search location" />
        <button>Search</button>
      </form>
      <!-- Search for location END -->

      <!-- Weather report container -->
      <div ${ELEMENT_DATA.weatherReportContainer}></div>
      <!-- Weather report container END -->
    </div>
  `;

  const searchForLocationEl = assertNotNull(
    document.querySelector(ELEMENT_SELECTOR.searchForLocation)
  );

  const weatherReportContainerEl = assertNotNull(
    document.querySelector(ELEMENT_SELECTOR.weatherReportContainer)
  );

  searchForLocationEl.addEventListener("submit", event => {
    event.preventDefault();

    const target = assertHTMLFormElement(assertNotNull(event.target));

    const data = new FormData(target);

    const q = data.get(FORM_FIELD.q);

    if (typeof q === "string" && q.length)
      autocompleteQuery(q).then(response => {
        switch (response.length) {
          case 0:
            renderNoLocations(weatherReportContainerEl);
            break;

          case 1:
            loadWeatherReport(
              weatherReportContainerEl,
              assertDefined(response[0]).Key
            );
            break;

          default:
            renderLocationsList(weatherReportContainerEl, response);
        }
      });
  });

  loadWeatherReport(weatherReportContainerEl, key);
}

/**
 * @param {Element} containerEl
 * @param {string} key
 */
function loadWeatherReport(containerEl, key) {
  Promise.all([currentConditionsQuery(key), dailyForecastsQuery(key)])
    .then(([currentConditions, dailyForecasts]) => {
      containerEl.innerHTML = /*html*/ `
          <!-- Current conditions -->
          <div ${ELEMENT_DATA.currentConditionsContainer}></div>
          <!-- Current conditions END -->

          <!-- Daily forecasts -->
          <div ${ELEMENT_DATA.dailyForecastsContainer}></div>
          <!-- Daily forecasts END -->
        `;

      const currentConditionsContainerEl = assertNotNull(
        document.querySelector(ELEMENT_SELECTOR.currentConditionsContainer)
      );

      const dailyForecastsContainerEl = assertNotNull(
        document.querySelector(ELEMENT_SELECTOR.dailyForecastsContainer)
      );

      renderCurrentConditions(currentConditionsContainerEl, currentConditions);
      renderDailyForecasts(dailyForecastsContainerEl, dailyForecasts);
    })
    .catch(error => {
      console.error("Error in loadWeatherReport:", error);
    });
}
