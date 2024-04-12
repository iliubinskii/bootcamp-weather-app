import { LOCAL_STORAGE_KEY } from "./consts.js";

export const { getFavoritesStore } = createSingleton();

function createSingleton() {
  /**
   * @type {Array<{
   *   Country: { LocalizedName: string },
   *   Key: string,
   *   LocalizedName: string
   * }>} locations
   */
  let favorites;

  return {
    getFavoritesStore: () => {
      favorites = favorites ?? readFromLocalStorage();

      return {
        /**
         * @param {{
         *   Country: { LocalizedName: string },
         *   Key: string,
         *   LocalizedName: string
         * }} location
         */
        addToFavorites: location => {
          const index = favorites.findIndex(
            favorite => favorite.Key === location.Key
          );

          if (index !== -1) favorites.splice(index, 1);

          favorites.push(location);

          writeToLocalStorage(favorites);
        },

        /**
         * @returns {Array<{
         *   Country: { LocalizedName: string },
         *   Key: string,
         *   LocalizedName: string
         * }>}
         */
        getFavorites: () => favorites,

        /**
         * @param {string} locationKey
         */
        removeFromFavorites: locationKey => {
          const index = favorites.findIndex(
            favorite => favorite.Key === locationKey
          );

          if (index !== -1) favorites.splice(index, 1);

          writeToLocalStorage(favorites);
        }
      };
    }
  };
}

/**
 * @returns {Array<{
 *   Country: { LocalizedName: string },
 *   Key: string,
 *   LocalizedName: string
 * }>}
 */
function readFromLocalStorage() {
  const stringData = localStorage.getItem(LOCAL_STORAGE_KEY.favorites);

  if (typeof stringData === "string") {
    const jsonData = JSON.parse(stringData);

    if (Array.isArray(jsonData)) return jsonData;
  }

  return [];
}

/**
 * @param {Array<{
 *   Country: { LocalizedName: string },
 *   Key: string,
 *   LocalizedName: string
 * }>} locations
 */
function writeToLocalStorage(locations) {
  const stringData = JSON.stringify(locations);

  localStorage.setItem(LOCAL_STORAGE_KEY.favorites, stringData);
}
