import { getTemperatureText, getWeatherIconImg } from "../utils.js";

/**
 * @param {Element} containerEl
 * @param {typeof import("../types.js").DailyForecastsType} forecasts
 */
export function renderDailyForecasts(containerEl, forecasts) {
  containerEl.innerHTML = /*html*/ `
    <div class="d-flex gap-2">
      ${forecasts.DailyForecasts.map(forecast => {
        const date = dateFns.format(forecast.Date, "d MMM");

        return /*html*/ `
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">${date}</h6>
              <div class="card-text">
                <div>
                  ${getTemperatureText(forecast.Temperature.Maximum)}
                </div>
                <div>
                  ${getTemperatureText(forecast.Temperature.Minimum)}
                </div>
                <div>
                  ${getWeatherIconImg(forecast.Day.Icon, forecast.Day.IconPhrase)}
                </div>
                <div>
                  ${getWeatherIconImg(forecast.Night.Icon, forecast.Night.IconPhrase)}
                </div>
              </div>
            </div>
          </div>
        `;
      }).join("\n")}
    </div>
  `;
}
