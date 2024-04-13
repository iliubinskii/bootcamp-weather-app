import { ELEMENT_SELECTOR } from "./consts.js";
import { renderFavorites, renderWeatherReport } from "./renderers/index.js";
import { assertNotNull } from "./utils.js";

const favoritesLinkEl = assertNotNull(
  document.querySelector(ELEMENT_SELECTOR.favoritesLink)
);

const pageContainerEl = assertNotNull(
  document.querySelector(ELEMENT_SELECTOR.pageContainer)
);

const weatherReportLinkEl = assertNotNull(
  document.querySelector(ELEMENT_SELECTOR.weatherReportLink)
);

favoritesLinkEl.addEventListener("click", () =>
  renderFavorites(pageContainerEl)
);

weatherReportLinkEl.addEventListener("click", () =>
  renderWeatherReport(pageContainerEl)
);

renderWeatherReport(pageContainerEl);
