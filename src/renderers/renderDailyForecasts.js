import { getTemperatureText, getWeatherIconImg } from "../utils.js";

/**
 * @param {Element} containerEl
 * @param {typeof import("../types.js").DailyForecastsType} forecasts
 */
export function renderDailyForecasts(containerEl, forecasts) {
  containerEl.innerHTML = /*html*/ `
    <div class="row g-2">
      ${forecasts.DailyForecasts.map(forecast => {
        const date = dateFns.format(forecast.Date, "eee, d MMM");

        return /*html*/ `
          <div class="col">
            <div class="card">
              <div class="card-header bg-secondary text-white">
                ${date}
              </div>
              <div class="card-body d-flex flex-column gap-2">
                <div>
                  <i class="fa-solid fa-arrow-up-long text-success"></i>
                  ${getTemperatureText(forecast.Temperature.Maximum)}
                </div>
                <div>
                  <i class="fa-solid fa-arrow-down-long text-danger"></i>
                  ${getTemperatureText(forecast.Temperature.Minimum)}
                </div>
                <div class="d-flex flex-column align-items-center gap-1">
                  ${getWeatherIconImg(forecast.Day.Icon, forecast.Day.IconPhrase)}
                </div>
                <div class="d-flex justify-content-center">
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
