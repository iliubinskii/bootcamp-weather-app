/*
TODO
- Implement the renderWeatherReport function
- Add loading spinner to the button
- Show weather icons based on icons numbers returned from the API
- Add weather report
- Use Tel Aviv as default (DEFAULT_LOCATION_KEY)
- Deal with situation when multiple results are returned by autocompleteQuery
- Disable submit button when input field is empty
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

/**
 * @param {Element} container
 */
export function renderWeatherReport(container, key = DEFAULT_LOCATION_KEY) {
  container.innerHTML = /*html*/ `
    <div>
      <!-- Search for location -->
      <form ${ELEMENT_DATA.searchForLocation}>
        <input type="text" name="${FORM_FIELD.q}" placeholder="Search location" />
        <button>Search</button>
      </form>
      <!-- Search for location END -->

      <!-- Current conditions -->
      <div ${ELEMENT_DATA.currentConditionsContainer}></div>
      <!-- Current conditions END -->

      <!-- Daily forecasts -->
      <div ${ELEMENT_DATA.dailyForecastsContainer}></div>
      <!-- Daily forecasts END -->
    </div>
  `;

  const searchForLocationEl = assertNotNull(
    document.querySelector(ELEMENT_SELECTOR.searchForLocation)
  );

  searchForLocationEl.addEventListener("submit", event => {
    event.preventDefault();

    const target = assertHTMLFormElement(assertNotNull(event.target));

    const data = new FormData(target);

    const q = data.get(FORM_FIELD.q);

    if (typeof q === "string" && q.length)
      autocompleteQuery(q).then(response => {
        if (response.length === 0) {
          console.error("Error in renderWeatherReport: Not implemented");
        } else if (response.length === 1) {
          loadWeatherReport(assertDefined(response[0]).Key);
        } else {
          console.error("Error in renderWeatherReport: Not implemented");
        }
      });
  });

  loadWeatherReport(key);
}

/**
 * @param {string} key
 */
function loadWeatherReport(key) {
  const currentConditionsContainerEl = assertNotNull(
    document.querySelector(ELEMENT_SELECTOR.currentConditionsContainer)
  );

  const dailyForecastsContainerEl = assertNotNull(
    document.querySelector(ELEMENT_SELECTOR.dailyForecastsContainer)
  );

  currentConditionsQuery(key)
    .then(response => {
      currentConditionsContainerEl.innerHTML = /*html*/ `
      <div>
        ${JSON.stringify(response)}
      </div>
    `;
    })
    .catch(error => {
      console.error("Error in loadWeatherReport:", error);
    });

  dailyForecastsQuery(key)
    .then(response => {
      dailyForecastsContainerEl.innerHTML = /*html*/ `
      <div>
        ${JSON.stringify(response)}
      </div>
    `;
    })
    .catch(error => {
      console.error("Error in loadWeatherReport:", error);
    });
}
