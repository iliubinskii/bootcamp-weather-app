import { API_ENDPOINT } from "../consts.js";

/**
 * @param {Element} containerEl
 * @param {typeof import("../types.js").CurrentConditionsType} conditions
 */
export function renderCurrentConditions(containerEl, conditions) {
  const iconId = conditions.WeatherIcon.toString().padStart(2, "0");

  const iconFilename = `${iconId}-s.png`;

  containerEl.innerHTML = /*html*/ `
    <div class="d-flex align-items-center">
      <img src="${API_ENDPOINT.files}/${iconFilename}" alt="${conditions.WeatherText}" />
      <div>
        ${conditions.Temperature.Imperial.Value}°${conditions.Temperature.Imperial.Unit}
      </div>
    </div>
  `;
}
