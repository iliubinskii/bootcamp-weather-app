/*
TODO
- Implement the renderWeatherReport function
- Add loading spinner to the button
- Show weather icons based on icons numbers returned from the API
- Add weather report
- Add weather forecast
- Use Tel Aviv as default (DEFAULT_KEY)
- Deal with situation when multiple results are returned by autocompleteQuery
- Disable submit button when input field is empty
*/

import {
  DEFAULT_KEY,
  ELEMENT_DATA,
  ELEMENT_SELECTOR,
  FORM_FIELD
} from "./consts.js";
import { autocompleteQuery } from "./api/autocompleteQuery.js";
import { currentConditionsQuery } from "./api/currentConditionsQuery.js";
import { dailyForcastQuery } from "./api/dailyForcastQuery.js";
import { assertDefined, assertNotNull } from "./utils.js";

/**
 * @param {Element} container
 */
export function renderWeatherReport(container, key = DEFAULT_KEY) {
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

      <!-- Daily forcast -->
      <div ${ELEMENT_DATA.dailyForcastContainer}></div>
      <!-- Daily forcast END -->
    </div>
  `;

  const searchForLocationEl = assertNotNull(
    document.querySelector(ELEMENT_SELECTOR.searchForLocation)
  );

  searchForLocationEl.addEventListener("submit", event => {
    event.preventDefault();

    /**
     * @type {{ target: HTMLFormElement }}
     */
    // @ts-ignore
    const { target } = event;

    const data = new FormData(target);

    const q = data.get(FORM_FIELD.q);

    if (typeof q === "string" && q.length)
      autocompleteQuery(q).then(response => {
        if (response.length === 0) {
          console.error("Not implemented");
        } else if (response.length === 1) {
          loadWeatherReport(assertDefined(response[0]).Key);
        } else {
          console.error("Not implemented");
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

  const dailyForcastContainerEl = assertNotNull(
    document.querySelector(ELEMENT_SELECTOR.dailyForcastContainer)
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
      console.error(error);
    });

  dailyForcastQuery(key)
    .then(response => {
      dailyForcastContainerEl.innerHTML = /*html*/ `
      <div>
        ${JSON.stringify(response)}
      </div>
    `;
    })
    .catch(error => {
      console.error(error);
    });
}
