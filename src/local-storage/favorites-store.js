import { LOCAL_STORAGE_KEY } from "../consts.js";

export const { getFavoritesStore } = createSingleton();

function createSingleton() {
  /**
   * @type {typeof import("../types.js").LocationsType}
   */
  let favorites;

  return {
    getFavoritesStore: () => {
      favorites = favorites ?? readFromLocalStorage();

      return {
        /**
         * @param {typeof import("../types.js").LocationType} location
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
         * @returns {typeof import("../types.js").LocationsType}
         */
        getFavorites: () => favorites,

        /**
         * @param {string} key
         * @returns {boolean}
         */
        isFavorite: key => favorites.some(favorite => favorite.Key === key),

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
 * @returns {typeof import("../types.js").LocationsType}
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
 * @param {typeof import("../types.js").LocationsType} locations
 */
function writeToLocalStorage(locations) {
  const stringData = JSON.stringify(locations);

  localStorage.setItem(LOCAL_STORAGE_KEY.favorites, stringData);
}
