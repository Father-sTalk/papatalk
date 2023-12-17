import React from "react";
interface Props {
  value: string;
  delayTime: number;
}

const defaultDelayTime = 500;

const useDebounce = ({ delayTime, value }: Props) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const timer = setTimeout(
      () => setDebouncedValue(value),
      delayTime || defaultDelayTime,
    );
    return () => {
      clearTimeout(timer);
    };
  }, [value, delayTime]);

  return debouncedValue;
};

export default useDebounce;
