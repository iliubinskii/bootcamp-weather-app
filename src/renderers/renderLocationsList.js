import { ELEMENT_DATA, ELEMENT_SELECTOR } from "../consts.js";
import { assertNotNull } from "../utils.js";

/**
 * @param {Element} containerEl
 * @param {typeof import("../types.js").LocationsType} locations
 * @param {(key: string) => void} onSelectLocation
 */
export function renderLocationsList(containerEl, locations, onSelectLocation) {
  try {
    containerEl.innerHTML = /*html*/ `
    <div class="list-group">
      ${locations
        .map(location => {
          return /*html*/ `
            <button
              class="list-group-item"
              ${ELEMENT_DATA.location}
              ${ELEMENT_DATA.locationKey}="${location.Key}"
            >
              ${location.LocalizedName}, ${location.Country.LocalizedName}
            </button>
          `;
        })
        .join("\n")}
    </div>
  `;

    const locationElements = containerEl.querySelectorAll(
      ELEMENT_SELECTOR.location
    );

    locationElements.forEach(locationEl => {
      locationEl.addEventListener("click", () => {
        const key = assertNotNull(
          locationEl.getAttribute(ELEMENT_DATA.locationKey)
        );

        onSelectLocation(key);
      });
    });
  } catch (error) {
    console.error("Error in renderLocationsList:", error);
  }
}
