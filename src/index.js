import { renderFavorites, renderWeatherReport } from "./renderers/index.js";
import { ELEMENT_SELECTOR } from "./consts.js";
import { assertNotNull } from "./utils.js";
import { getAppStateStore } from "./local-storage/app-state-store.js";

const { getAppState } = getAppStateStore();

const favoritesLinkEl = assertNotNull(
  document.querySelector(ELEMENT_SELECTOR.favoritesLink)
);

const pageContainerEl = assertNotNull(
  document.querySelector(ELEMENT_SELECTOR.pageContainer)
);

const weatherReportLinkEl = assertNotNull(
  document.querySelector(ELEMENT_SELECTOR.weatherReportLink)
);

favoritesLinkEl.addEventListener("click", openFavorites);

weatherReportLinkEl.addEventListener("click", openWeatherReport);

openWeatherReport();

function openFavorites() {
  renderFavorites(pageContainerEl, favorite => {
    renderWeatherReport(pageContainerEl, favorite);
  });
}
function openWeatherReport() {
  const { location } = getAppState();

  renderWeatherReport(pageContainerEl, location);
}
