import { ELEMENT_SELECTOR } from "./consts.js";
import { renderFavorites } from "./renderFavorites.js";
import { renderWeatherReport } from "./renderWeatherReport.js";

const favoritesLinkEl = document.querySelector(ELEMENT_SELECTOR.favoritesLink);

const pageContainerEl = document.querySelector(ELEMENT_SELECTOR.pageContainer);

const weatherReportLinkEl = document.querySelector(
  ELEMENT_SELECTOR.weatherReportLink
);

favoritesLinkEl.addEventListener("click", () =>
  renderFavorites(pageContainerEl)
);
weatherReportLinkEl.addEventListener("click", () =>
  renderWeatherReport(pageContainerEl)
);

renderWeatherReport(pageContainerEl);
