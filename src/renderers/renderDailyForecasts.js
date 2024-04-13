/**
 * @param {Element} containerEl
 * @param {typeof import("../types.js").DailyForecastsType} forecasts
 */
export function renderDailyForecasts(containerEl, forecasts) {
  containerEl.innerHTML = /*html*/ `
  <div>
    ${JSON.stringify(forecasts)}
  </div>
`;
}
