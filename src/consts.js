/*
TODO
- Do not store API key in the code. Use environment variables.
*/

export const API_ENDPOINT = {
  autocomplete:
    "https://dataservice.accuweather.com/locations/v1/cities/autocomplete",
  currentConditions: "https://dataservice.accuweather.com/currentconditions/v1",
  daily5: "https://dataservice.accuweather.com/forecasts/v1/daily/5day"
};

export const API_KEY = "JNQ5epGgZUh6jeiNJUnJfGcrFnAuooJ3";

export const API_LANGUAGE = "en-us";

export const DEFAULT_KEY = "215854";

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

export const DEV_MODE = true;
