/*
TODO
- Implement the renderFavorites function
*/

import { getFavoritesStore } from "../local-storage/index.js";

/**
 * @param {Element} containerEl
 */
export function renderFavorites(containerEl) {
  const { getFavorites } = getFavoritesStore();

  const favorites = getFavorites();

  containerEl.innerHTML = /*html*/ `
    <div>
      ${JSON.stringify(favorites)}
    </div>
  `;
}
