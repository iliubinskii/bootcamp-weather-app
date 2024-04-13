/*
TODO
- Implement the renderFavorites function
*/

import { ELEMENT_DATA, ELEMENT_SELECTOR } from "../consts.js";
import { assertDefined, assertNotNull } from "../utils.js";
import { getFavoritesStore } from "../local-storage/index.js";

/**
 * @param {Element} containerEl
 * @param {(favorite: typeof import("../types.js").LocationType) => void} onSelectFavorite
 */
export function renderFavorites(containerEl, onSelectFavorite) {
  const { getFavorites } = getFavoritesStore();

  const favorites = getFavorites();

  containerEl.innerHTML = /*html*/ `
    <div class="list-group">
      ${favorites
        .map(favorite => {
          return /*html*/ `
            <button
              class="list-group-item"
              ${ELEMENT_DATA.favorite}
              ${`${ELEMENT_DATA.favoriteKey}="${favorite.Key}"`}
            >
              ${favorite.LocalizedName}, ${favorite.Country.LocalizedName}
            </button>
          `;
        })
        .join("\n")}
    </div>
  `;

  const favoriteElements = containerEl.querySelectorAll(
    ELEMENT_SELECTOR.favorite
  );

  favoriteElements.forEach(favoriteEl => {
    favoriteEl.addEventListener("click", () => {
      try {
        const key = assertNotNull(
          favoriteEl.getAttribute(ELEMENT_DATA.favoriteKey)
        );

        const favorite = assertDefined(
          favorites.find(favorite => favorite.Key === key)
        );

        onSelectFavorite(favorite);
      } catch (error) {
        console.error("Error in renderFavorites:", error);
      }
    });
  });
}
