import { getTemperatureText, getWeatherIconImg } from "../utils.js";

/**
 * @param {Element} containerEl
 * @param {typeof import("../types.js").CurrentConditionsType} conditions
 */
export function renderCurrentConditions(containerEl, conditions) {
  containerEl.innerHTML = /*html*/ `
    <div class="d-flex align-items-center">
      ${getWeatherIconImg(conditions.WeatherIcon, conditions.WeatherText)}
      <div>
        ${getTemperatureText(conditions.Temperature.Imperial)}
      </div>
    </div>
  `;
}
