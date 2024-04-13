/*
TODO
- Implement the renderDailyForecasts function
- Show weather icons based on icons numbers returned from the API
*/

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
