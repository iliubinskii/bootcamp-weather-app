/*
TODO
- Implement the renderFavorites function
*/

import { getFavoritesStore } from "../favorites-store.js";

/**
 * @param {Element} container
 */
export function renderFavorites(container) {
  const { getFavorites } = getFavoritesStore();

  const favorites = getFavorites();

  container.innerHTML = /*html*/ `
    <div>
      ${JSON.stringify(favorites)}
    </div>
  `;
}
