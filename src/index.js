import { ELEMENT_SELECTOR, FORM_FIELD } from "./consts.js";
import {
  assertDefined,
  assertHTMLFormElement,
  assertNotNull
} from "./utils.js";
import {
  renderErrorMessage,
  renderFavorites,
  renderLocationsList,
  renderWeatherReport
} from "./renderers/index.js";
import { autocompleteQuery } from "./weather-api/autocompleteQuery.js";
import { getAppStateStore } from "./local-storage/app-state-store.js";

const { getAppState } = getAppStateStore();

const weatherReportLinkEl = assertNotNull(
  document.querySelector(ELEMENT_SELECTOR.weatherReportLink)
);

const favoritesLinkEl = assertNotNull(
  document.querySelector(ELEMENT_SELECTOR.favoritesLink)
);

const searchForLocationEl = assertNotNull(
  document.querySelector(ELEMENT_SELECTOR.searchForLocation)
);

const searchForLocationInputEl = assertNotNull(
  document.querySelector(ELEMENT_SELECTOR.searchForLocationInput)
);

const searchForLocationButtonEl = assertNotNull(
  document.querySelector(ELEMENT_SELECTOR.searchForLocationButton)
);

const pageContainerEl = assertNotNull(
  document.querySelector(ELEMENT_SELECTOR.pageContainer)
);

weatherReportLinkEl.addEventListener("click", openWeatherReport);

favoritesLinkEl.addEventListener("click", openFavorites);

searchForLocationEl.addEventListener("submit", async event => {
  event.preventDefault();

  const target = assertHTMLFormElement(assertNotNull(event.target));

  const data = new FormData(target);

  const q = data.get(FORM_FIELD.q);

  if (typeof q === "string" && q.length) {
    searchForLocationInputEl.setAttribute("disabled", "");
    searchForLocationButtonEl.setAttribute("disabled", "");
    searchForLocationButtonEl.innerHTML = /*html*/ `
      <i class="fa fa-spinner fa-spin fa-lg"></i>
    `;

    try {
      const locations = await autocompleteQuery(q);

      switch (locations.length) {
        case 0:
          renderErrorMessage(pageContainerEl, "No locations found.");

          break;

        case 1:
          await renderWeatherReport(
            pageContainerEl,
            assertDefined(locations[0]),
            openWeatherReport
          );

          break;

        default:
          renderLocationsList(pageContainerEl, locations, async key => {
            await renderWeatherReport(pageContainerEl, key, openWeatherReport);
          });
      }
    } finally {
      searchForLocationButtonEl.removeAttribute("disabled");
      searchForLocationInputEl.removeAttribute("disabled");
      searchForLocationButtonEl.innerHTML = /*html*/ `
          <i class="fa-solid fa-magnifying-glass fa-lg"></i>
        `;
    }
  } else renderErrorMessage(pageContainerEl, "Please enter a location.");
});

openWeatherReport();

function openFavorites() {
  renderFavorites(pageContainerEl, async favorite => {
    await renderWeatherReport(pageContainerEl, favorite, openWeatherReport);
  });
}

function openWeatherReport() {
  const { location } = getAppState();

  renderWeatherReport(pageContainerEl, location, openWeatherReport);
}
