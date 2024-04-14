import { getFavoritesStore } from "../local-storage/index.js";
import { renderLocationsList } from "./renderLocationsList.js";

/**
 * @param {Element} containerEl
 * @param {(location: typeof import("../types.js").LocationType) => Promise<void>} onSelectLocation
 * @param {(error: string) => void} onError
 */
export function renderFavorites(containerEl, onSelectLocation, onError) {
  const { getFavorites } = getFavoritesStore();

  const favorites = getFavorites();

  renderLocationsList(containerEl, favorites, onSelectLocation, onError);
}
