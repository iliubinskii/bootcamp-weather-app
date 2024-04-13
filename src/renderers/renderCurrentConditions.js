/*
TODO:
- Update favorite button on toggle
- Use favicons for favorite button
*/

import { ELEMENT_DATA, ELEMENT_SELECTOR } from "../consts.js";
import {
  assertNotNull,
  getLocationName,
  getTemperatureText,
  getWeatherIconImg
} from "../utils.js";
import { getFavoritesStore } from "../local-storage/favorites-store.js";

/**
 * @param {Element} containerEl
 * @param {typeof import("../types.js").LocationType} location
 * @param {typeof import("../types.js").CurrentConditionsType} conditions
 */
export function renderCurrentConditions(containerEl, location, conditions) {
  const { addToFavorites, isFavorite, removeFromFavorites } =
    getFavoritesStore();

  containerEl.innerHTML = /*html*/ `
    <div>
      <div class="d-flex justify-content-between">
        <h2 class="fs-3">
          ${getWeatherIconImg(conditions.WeatherIcon, conditions.WeatherText)}
          ${getLocationName(location)}
        </h2>
        <button
          ${ELEMENT_DATA.toggleFavoriteButton}
          class="btn btn-light round-button"
        >
          ${getFavoriteIcon()}
        </button>
      </div>
      <div>
        Temperature: ${getTemperatureText(conditions.Temperature.Imperial)}
      </div>
    </div>
  `;

  const toggleFavoriteButton = assertNotNull(
    containerEl.querySelector(ELEMENT_SELECTOR.toggleFavoriteButton)
  );

  toggleFavoriteButton.addEventListener("click", () => {
    if (isFavorite(location.Key)) removeFromFavorites(location.Key);
    else addToFavorites(location);

    toggleFavoriteButton.innerHTML = getFavoriteIcon();
  });

  /**
   * @returns {string}
   */
  function getFavoriteIcon() {
    return isFavorite(location.Key)
      ? '<i class="fa-solid fa-heart fa-lg"></i>'
      : '<i class="fa-regular fa-heart fa-lg"></i>';
  }
}
