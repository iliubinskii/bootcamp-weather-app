/**
 * @param {Element} containerEl
 */
export function renderNoLocations(containerEl) {
  containerEl.innerHTML = /*html*/ `
  <div class="alert alert-warning">
    No locations found
  </div>
`;
}
