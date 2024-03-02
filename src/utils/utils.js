/**
 * Copies object and sets all values to true.
 *
 * @param {*} obj - The object to copy from.
 * @returns - an object with all values set to true.
 */
export function deepCopyWithTrue(obj) {
  if (typeof obj === "object" && obj !== null) {
    if (Array.isArray(obj)) {
      return obj.map(deepCopyWithTrue);
    } else {
      const newObj = {};
      for (const key in obj) {
        newObj[key] = deepCopyWithTrue(obj[key]);
      }
      return newObj;
    }
  } else {
    return true;
  }
}
