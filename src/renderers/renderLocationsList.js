/*
TODO
- Implement the renderLocationsList function
*/

/**
 * @param {Element} containerEl
 * @param {typeof import("../types.js").LocationsType} locations
 */
export function renderLocationsList(containerEl, locations) {
  containerEl.innerHTML = /*html*/ `
  <div>
    ${JSON.stringify(locations)}
  </div>
`;
}
