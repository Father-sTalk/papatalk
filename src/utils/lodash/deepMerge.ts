interface AnyObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const isObject = (item: unknown): item is AnyObject =>
  typeof item === "object" && item !== null && !Array.isArray(item);

export const deepMerge = (target: AnyObject, source: AnyObject): AnyObject => {
  const result = { ...target };
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      const targetValue = target[key];
      const sourceValue = source[key];
      if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
        result[key] = targetValue.map((item, index) => {
          if (sourceValue.length <= index) {
            return item;
          } else if (isObject(item) && isObject(sourceValue[index])) {
            return deepMerge(item as AnyObject, sourceValue[index]);
          } else {
            return sourceValue[index];
          }
        });
        if (sourceValue.length > targetValue.length) {
          result[key] = result[key].concat(
            sourceValue.slice(targetValue.length),
          );
        }
      } else if (isObject(targetValue) && isObject(sourceValue)) {
        result[key] = deepMerge(targetValue, sourceValue);
      } else {
        result[key] = sourceValue;
      }
    }
  }
  return result;
};
