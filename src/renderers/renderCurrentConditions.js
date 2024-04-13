/*
TODO:
- Update favorite button on toggle
- Use favicons for favorite button
*/

import { ELEMENT_DATA, ELEMENT_SELECTOR } from "../consts.js";
import {
  assertNotNull,
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
  const { isFavorite, addToFavorites, removeFromFavorites } =
    getFavoritesStore();

  containerEl.innerHTML = /*html*/ `
    <div class="d-flex align-items-center">
      ${getWeatherIconImg(conditions.WeatherIcon, conditions.WeatherText)}
      <div>
        ${getTemperatureText(conditions.Temperature.Imperial)}
      </div>
      <button
        class="btn btn-primary"
        ${ELEMENT_DATA.toggleFavoriteButton}
      >
        ${isFavorite(location.Key) ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  `;

  const toggleFavoriteButton = assertNotNull(
    containerEl.querySelector(ELEMENT_SELECTOR.toggleFavoriteButton)
  );

  toggleFavoriteButton.addEventListener("click", () => {
    if (isFavorite(location.Key)) removeFromFavorites(location.Key);
    else addToFavorites(location);
  });
}
