// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DeepEqualObject = { [key: string]: any } | null;

export const deepEqual = (
  obj1: DeepEqualObject,
  obj2: DeepEqualObject,
): boolean => {
  if (obj1 === obj2) {
    return true;
  }

  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  return keys1.every(
    (key) => keys2.includes(key) && deepEqual(obj1[key], obj2[key]),
  );
};
