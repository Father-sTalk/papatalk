import React from "react";

import DropdownBasic from "../dropdown/dropdown_basic";

interface DateSelectProps {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

const DateSelect: React.FC<DateSelectProps> = ({ date, setDate }) => {
  const year = date.split("-")[0];
  const month = date.split("-")[1];
  const day = date.split("-")[2];

  const today = new Date();
  const currentYear = today.getFullYear();
  const years = Array.from({ length: currentYear + 1 - 1900 }, (_, i) =>
    (i + 1900).toString(),
  ).reverse();
  const months = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, "0"),
  );

  const [days, setDays] = React.useState<string[]>(
    Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, "0")),
  );

  React.useEffect(() => {
    const date = new Date(Number(year), Number(month), 0);
    const maxDay = date.getDate();
    setDays(
      Array.from({ length: maxDay }, (_, i) =>
        (i + 1).toString().padStart(2, "0"),
      ),
    );
    if (Number(day) > maxDay) {
      setDate(`${year}-${month}-${maxDay.toString().padStart(2, "0")}`);
    }
  }, [year, month, day, setDate]);

  const handleSetYear = (newYear: string) =>
    setDate(`${newYear}-${month}-${day}`);
  const handleSetMonth = (newMonth: string) =>
    setDate(`${year}-${newMonth}-${day}`);
  const handleSetDay = (newDay: string) =>
    setDate(`${year}-${month}-${newDay}`);

  return (
    <div className="flex flex-row gap-4">
      <DropdownBasic list={years} selected={year} setSelected={handleSetYear} />
      <DropdownBasic
        list={months}
        selected={month}
        setSelected={handleSetMonth}
      />
      <DropdownBasic list={days} selected={day} setSelected={handleSetDay} />
    </div>
  );
};

export default DateSelect;
