import { LOCAL_STORAGE_KEY } from "../consts.js";

export const { getAppStateStore } = createSingleton();

function createSingleton() {
  /**
   * @type {typeof import("../types.js").AppStateType}
   */
  let state;

  return {
    getAppStateStore: () => {
      state = state ?? readFromLocalStorage();

      return {
        /**
         * @param {boolean} metric
         */
        setMetric: metric => {
          state.metric = metric;

          writeToLocalStorage(state);
        },

        /**
         * @returns {typeof import("../types.js").AppStateType}
         */
        getAppState: () => state
      };
    }
  };
}

/**
 * @returns {typeof import("../types.js").AppStateType}
 */
function readFromLocalStorage() {
  const stringData = localStorage.getItem(LOCAL_STORAGE_KEY.appState);

  if (typeof stringData === "string") {
    const jsonData = JSON.parse(stringData);

    if (typeof jsonData === "object") return jsonData;
  }

  return { metric: true };
}

/**
 * @param {typeof import("../types.js").AppStateType} state
 */
function writeToLocalStorage(state) {
  const stringData = JSON.stringify(state);

  localStorage.setItem(LOCAL_STORAGE_KEY.appState, stringData);
}
