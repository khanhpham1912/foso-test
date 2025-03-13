import dayjs from "dayjs";

const DATE_FORMAT = "DD/MM/YYYY";
const EMPTY_VALUE = "-";

export const displayValue = (value?: string): string => {
  return value ?? EMPTY_VALUE;
};

export const displayDate = (date?: Date, format = DATE_FORMAT): string => {
  return date ? dayjs(date).format(format) : EMPTY_VALUE;
};

export const displayNumber = (number: number | string): string => {
  if (!number) return "0";
  const num =
    typeof number === "string" ? parseInt(number.toString(), 10) : number;
  return num?.toLocaleString("en-US");
};
