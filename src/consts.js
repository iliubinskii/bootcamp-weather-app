/*
TODO
- Do not store API key in the code. Use environment variable.
- Do not use images from developer subdomain.
*/

export const API_ENDPOINT = {
  autocomplete:
    "https://dataservice.accuweather.com/locations/v1/cities/autocomplete",
  currentConditions: "https://dataservice.accuweather.com/currentconditions/v1",
  daily5: "https://dataservice.accuweather.com/forecasts/v1/daily/5day",
  files: "https://developer.accuweather.com/sites/default/files"
};

// eslint-disable-next-line spellcheck/spell-checker -- Ok
export const API_KEY = "8t5I2u69XSRhuGD1FPLbMSkd7BD9AFvF";

export const API_LANGUAGE = "en-us";

/**
 * @type {typeof import("./types.js").LocationType}}
 */
export const DEFAULT_LOCATION = {
  Key: "215854",
  LocalizedName: "Tel Aviv",
  Country: { LocalizedName: "Israel" }
};

export const ELEMENT_DATA = {
  currentConditionsContainer: "data-current-conditions-container",
  dailyForecastsContainer: "data-daily-forecasts-container",
  devModeAlert: "data-dev-mode-alert",
  favoritesLink: "data-favorites-link",
  location: "data-location",
  locationIconContainer: "data-location-icon-container",
  locationKey: "data-location-key",
  pageContainer: "data-page-container",
  reloadButton: "data-reload-button",
  searchForLocation: "data-search-for-location",
  searchForLocationButton: "data-search-for-location-button",
  searchForLocationInput: "data-search-for-location-input",
  toggleDevModeButton: "data-toggle-dev-mode-button",
  toggleFavoriteButton: "data-toggle-favorite-button",
  toggleMetricButton: "data-toggle-metric-button",
  weatherReportLink: "data-weather-report-link"
};

/**
 * @type {Record<keyof typeof ELEMENT_DATA, string>}
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment -- Ok
// @ts-expect-error
export const ELEMENT_SELECTOR = Object.fromEntries(
  Object.entries(ELEMENT_DATA).map(([key, value]) => [key, `[${value}]`])
);

export const FORM_FIELD = {
  q: "q"
};

export const LOCAL_STORAGE_KEY = {
  appState: "app-state",
  favorites: "favorites"
};

export const TEST_DELAY_MS = 1000;
