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
