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
 * @template T
 * @param {T | null} value
 * @returns {T}
 */
export function assertNotNull(value) {
  if (value === null) throw Error("Value is null");

  return value;
}
