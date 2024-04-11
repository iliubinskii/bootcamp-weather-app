export const ELEMENT_DATA = {
  favoritesLink: "data-favorites-link",
  pageContainer: "data-page-container",
  weatherReportLink: "data-weather-report-link"
};

/**
 * @type {Record<keyof typeof ELEMENT_DATA, string>}
 */
// @ts-ignore
export const ELEMENT_SELECTOR = Object.fromEntries(
  Object.entries(ELEMENT_DATA).map(([key, value]) => [key, `[${value}]`])
);
