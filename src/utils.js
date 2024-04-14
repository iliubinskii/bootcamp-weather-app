import { API_ENDPOINT, TEST_DELAY_MS } from "./consts.js";

/**
 * @template T
 * @param {T | undefined} value
 * @returns {T}
 */
export function assertDefined(value) {
  if (value === undefined) throw Error("Value is undefined");

  return value;
}

/**
 * @param {EventTarget} value
 * @returns {HTMLFormElement}
 */
export function assertHTMLFormElement(value) {
  if (value instanceof HTMLFormElement) return value;

  throw Error("Expected value to be an instance of HTMLFormElement");
}

/**
 * @template T
 * @param {T | null} value
 * @returns {T}
 */
export function assertNotNull(value) {
  if (value === null) throw Error("Value is null");

  return value;
}

/**
 * @returns {Promise<void>}
 */
export function testDelay() {
  return new Promise(resolve => {
    setTimeout(resolve, TEST_DELAY_MS);
  });
}

/**
 * @param {typeof import("./types.js").LocationType} location
 * @returns {string}
 */
export function getLocationName(location) {
  return `${location.LocalizedName}, ${location.Country.LocalizedName}`;
}

/**
 * @param {typeof import("./types.js").TemperatureType} temperature
 * @returns {string}
 */
export function getTemperatureText(temperature) {
  return `${temperature.Value}°${temperature.Unit}`;
}

/**
 * @param {number} iconId
 * @param {string} altText
 * @returns {string}
 */
export function getWeatherIconImg(iconId, altText) {
  const iconId2 = iconId.toString().padStart(2, "0");

  const iconFilename = `${iconId2}-s.png`;

  return /*html*/ `
    <img src="${API_ENDPOINT.files}/${iconFilename}" alt="${altText}" />
  `;
}
