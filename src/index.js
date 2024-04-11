/**
 * @param {string[]} x
 * @returns {string}
 */
export function f(x) {
  /**
   * @type {string[]}
   */
  const y = x;
  [1].map(n => n + 1);
  return "Hello, World! " + y.join(" ");
}
