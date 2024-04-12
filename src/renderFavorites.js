/*
TODO
- Implement the renderFavorites function
*/

import { ELEMENT_SELECTOR } from "./consts.js";
import { getFavoritesStore } from "./favorites-store.js";

export function renderFavorites() {
  const pageContainerEl = document.querySelector(
    ELEMENT_SELECTOR.pageContainer
  );

  const { getFavorites } = getFavoritesStore();

  const favoties = getFavorites();

  pageContainerEl.innerHTML = /*html*/ `
    <div>
      ${JSON.stringify(favoties)}
    </div>
  `;
}
