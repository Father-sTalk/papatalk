import React from "react";

import DropdownBasic from "../dropdown/dropdown_basic";

const years = Array.from({ length: 121 }, (_, i) => i + 1900).reverse();
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;
const currentDay = today.getDate();

const DateSelect: React.FC = () => {
  const [year, setYear] = React.useState<number>(currentYear);
  const [month, setMonth] = React.useState(currentMonth);
  const [day, setDay] = React.useState(currentDay);
  const [days, setDays] = React.useState(
    Array.from({ length: 31 }, (_, i) => i + 1),
  );

  React.useEffect(() => {
    const date = new Date(year, month, 0);
    const maxDay = date.getDate();
    setDays(Array.from({ length: maxDay }, (_, i) => i + 1));
    if (day > maxDay) {
      setDay(maxDay);
    }
  }, [year, month, day]);

  return (
    <div className="flex flex-row gap-4">
      <DropdownBasic list={years} selected={year} setSelected={setYear} />
      <DropdownBasic list={months} selected={month} setSelected={setMonth} />
      <DropdownBasic list={days} selected={day} setSelected={setDay} />
    </div>
  );
};

export default DateSelect;
