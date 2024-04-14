import { ELEMENT_DATA, ELEMENT_SELECTOR } from "../consts.js";
import { assertDefined, assertNotNull } from "../utils.js";

/**
 * @param {Element} containerEl
 * @param {typeof import("../types.js").LocationsType} locations
 * @param {(location: typeof import("../types.js").LocationType) => Promise<void>} onSelectLocation
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
              class="list-group-item list-group-item-action d-flex align-items-center gap-3"
            >
              <div ${ELEMENT_DATA.locationIconContainer}>
                <i class="fa-solid fa-location-dot fa-xl text-secondary"></i>
              </div>
              <div>
                <div class="fw-bold fs-7">${location.LocalizedName}</div>
                <div class="fs-9">${location.Country.LocalizedName}<div>
              </div>
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
    // eslint-disable-next-line @typescript-eslint/no-misused-promises -- Ok
    locationEl.addEventListener("click", async () => {
      const key = assertNotNull(
        locationEl.getAttribute(ELEMENT_DATA.locationKey)
      );

      const location = assertDefined(
        locations.find(location => location.Key === key)
      );

      const locationIconContainerEl = assertNotNull(
        locationEl.querySelector(ELEMENT_SELECTOR.locationIconContainer)
      );

      locationIconContainerEl.innerHTML = /*html*/ `
        <i class="fa fa-spinner fa-spin fa-xl text-secondary"></i>
      `;

      await onSelectLocation(location);
    });
  });
}
