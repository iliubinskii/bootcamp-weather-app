import { ELEMENT_DATA, ELEMENT_SELECTOR } from "../consts.js";
import {
  assertNotNull,
  getLocationName,
  getTemperatureText,
  getWeatherIconImg
} from "../utils.js";
import { getAppStateStore, getFavoritesStore } from "../local-storage/index.js";

/**
 * @param {Element} containerEl
 * @param {typeof import("../types.js").LocationType} location
 * @param {typeof import("../types.js").CurrentConditionsType} conditions
 * @param {() => Promise<void>} rerender
 * @param {(error: string) => void} onError
 */
export function renderCurrentConditions(
  containerEl,
  location,
  conditions,
  rerender,
  onError
) {
  const { addToFavorites, isFavorite, removeFromFavorites } =
    getFavoritesStore();

  const { getAppState, setMetric } = getAppStateStore();

  const { metric } = getAppState();

  const temperature = getTemperatureText(
    metric ? conditions.Temperature.Metric : conditions.Temperature.Imperial
  );

  const time = dateFns.format(new Date(), "hh:mm a");

  containerEl.innerHTML = /*html*/ `
    <div>
      <div class="d-flex flex-column flex-sm-row justify-content-between gap-3">
        <div>
          <h2 class="fs-3">
            ${getWeatherIconImg(conditions.WeatherIcon, conditions.WeatherText)}
            ${getLocationName(location)}
          </h2>
          <div>
            Temperature: ${temperature}
          </div>
          <div>
            Time: ${time}
          </div>
        </div>
        <div class="d-flex justify-content-around gap-2">
          <button
            ${ELEMENT_DATA.toggleFavoriteButton}
            class="btn btn-light round-button"
            title="Toggle favorite"
          >
            ${getFavoriteIcon()}
          </button>
          <button
            ${ELEMENT_DATA.toggleMetricButton}
            class="btn btn-light round-button"
            title="Toggle between Celsius and Fahrenheit"
          >
            <i class="fa-solid fa-lg">${metric ? "°C" : "°F"}</i>
          </button>
          <button
            ${ELEMENT_DATA.reloadButton}
            class="btn btn-light round-button"
            title="Reload data"
          >
            <i class="fa-solid fa-rotate-right fa-lg"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  const toggleFavoriteButton = assertNotNull(
    containerEl.querySelector(ELEMENT_SELECTOR.toggleFavoriteButton)
  );

  const toggleMetricButtonEl = assertNotNull(
    document.querySelector(ELEMENT_SELECTOR.toggleMetricButton)
  );

  const toggleReloadButtonEl = assertNotNull(
    document.querySelector(ELEMENT_SELECTOR.reloadButton)
  );

  toggleFavoriteButton.addEventListener("click", () => {
    if (isFavorite(location.Key)) removeFromFavorites(location.Key);
    else addToFavorites(location);

    toggleFavoriteButton.innerHTML = getFavoriteIcon();
  });

  // eslint-disable-next-line @typescript-eslint/no-misused-promises -- Ok
  toggleMetricButtonEl.addEventListener("click", async () => {
    toggleMetricButtonEl.setAttribute("disabled", "");
    toggleMetricButtonEl.innerHTML = /*html*/ `
      <i class="fa fa-spinner fa-spin fa-lg"></i>
    `;

    try {
      setMetric(!metric);
      await rerender();
    } catch (error) {
      onError(`Failed to load weather data for ${location.LocalizedName}.`);
      throw error;
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-misused-promises -- Ok
  toggleReloadButtonEl.addEventListener("click", async () => {
    toggleReloadButtonEl.setAttribute("disabled", "");
    toggleReloadButtonEl.innerHTML = /*html*/ `
      <i class="fa fa-spinner fa-spin fa-lg"></i>
    `;

    try {
      await rerender();
    } catch (error) {
      onError(`Failed to load weather data for ${location.LocalizedName}.`);
      throw error;
    }
  });

  /**
   * @returns {string}
   */
  function getFavoriteIcon() {
    return isFavorite(location.Key)
      ? /*html*/ `<i class="fa-solid fa-heart fa-lg"></i>`
      : /*html*/ `<i class="fa-regular fa-heart fa-lg"></i>`;
  }
}
