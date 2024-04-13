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
