import { ELEMENT_DATA, ELEMENT_SELECTOR } from "../consts.js";
import { assertDefined, assertNotNull, getLocationName } from "../utils.js";

/**
 * @param {Element} containerEl
 * @param {typeof import("../types.js").LocationsType} locations
 * @param {(location: typeof import("../types.js").LocationType) => void} onSelectLocation
 */
export function renderLocationsList(containerEl, locations, onSelectLocation) {
  containerEl.innerHTML = /*html*/ `
    <div class="list-group">
      ${locations
        .map(location => {
          return /*html*/ `
            <button
              ${ELEMENT_DATA.location}
              ${`${ELEMENT_DATA.locationKey}="${location.Key}"`}
              class="list-group-item"
            >
              ${getLocationName(location)}
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

      const location = assertDefined(
        locations.find(location => location.Key === key)
      );

      onSelectLocation(location);
    });
  });
}
