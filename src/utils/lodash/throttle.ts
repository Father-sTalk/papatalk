/* eslint-disable @typescript-eslint/no-explicit-any */
export const throttle = <F extends (...args: any[]) => any>(
  func: F,
  wait: number,
): ((...args: Parameters<F>) => ReturnType<F> | undefined) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let args: any[];
  let result: ReturnType<F> | undefined;
  let previous = 0;

  const later = () => {
    previous = Date.now();
    timeout = null;
    result = func.apply(this, args);
  };

  const throttled = function (this: any, ...incomingArgs: any[]) {
    const now = Date.now();
    const remaining = wait - (now - previous);
    args = incomingArgs;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(this, args);
    } else if (!timeout) {
      timeout = setTimeout(later, remaining);
    }

    return result;
  };

  return throttled;
};
