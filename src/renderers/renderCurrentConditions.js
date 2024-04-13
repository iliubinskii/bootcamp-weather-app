/*
TODO
- Implement the renderCurrentConditions function
- Show weather icons based on icons numbers returned from the API
*/

/**
 * @param {Element} containerEl
 * @param {typeof import("../types.js").CurrentConditionsType} conditions
 */
export function renderCurrentConditions(containerEl, conditions) {
  containerEl.innerHTML = /*html*/ `
  <div>
    ${JSON.stringify(conditions)}
  </div>
`;
}
