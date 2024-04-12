/*
TODO
- Implement the renderFavorites function
*/

import { getFavoritesStore } from "./favorites-store.js";

/**
 * @param {Element} container
 */
export function renderFavorites(container) {
  const { getFavorites } = getFavoritesStore();

  const favoties = getFavorites();

  container.innerHTML = /*html*/ `
    <div>
      ${JSON.stringify(favoties)}
    </div>
  `;
}
