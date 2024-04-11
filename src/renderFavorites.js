/*
TODO
- Implement the renderFavorites function
*/

import { ELEMENT_SELECTOR } from "./consts.js";

export function renderFavorites() {
  const pageContainerEl = document.querySelector(
    ELEMENT_SELECTOR.pageContainer
  );

  pageContainerEl.innerHTML = /*html*/ `
    <div>
      Favorites
    </div>
  `;
}
