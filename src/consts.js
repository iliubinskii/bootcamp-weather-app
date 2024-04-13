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

export const DEV_MODE = true;

export const ELEMENT_DATA = {
  currentConditionsContainer: "data-current-conditions-container",
  dailyForcastsContainer: "data-daily-forcasts-container",
  favoritesLink: "data-favorites-link",
  pageContainer: "data-page-container",
  searchForLocation: "data-search-for-location",
  weatherReportLink: "data-weather-report-link"
};

/**
 * @type {Record<keyof typeof ELEMENT_DATA, string>}
 */
// @ts-ignore
export const ELEMENT_SELECTOR = Object.fromEntries(
  Object.entries(ELEMENT_DATA).map(([key, value]) => [key, `[${value}]`])
);

export const FORM_FIELD = {
  q: "q"
};

export const LOCAL_STORAGE_KEY = {
  favorites: "favorites"
};
