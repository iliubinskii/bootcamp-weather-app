// TODO: Implement the renderWeatherReport function

import { ELEMENT_SELECTOR } from "./consts.js";

export function renderWeatherReport() {
  const pageContainerEl = document.querySelector(
    ELEMENT_SELECTOR.pageContainer
  );

  pageContainerEl.innerHTML = /*html*/ `
    <div>
      Weather report
    </div>
  `;
}
