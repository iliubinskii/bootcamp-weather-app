/**
 * @param {Element} containerEl
 * @param {string} message
 */
export function renderErrorMessage(containerEl, message) {
  containerEl.innerHTML = /*html*/ `
    <div class="alert alert-danger mb-0">
      ${message}
    </div>
  `;
}
