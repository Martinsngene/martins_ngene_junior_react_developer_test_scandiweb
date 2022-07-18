// These are some functions to help the parsing of data in this application

import { useSelector } from "react-redux";

/* This function return an index which is used to set the category name and
filter the data to match a selected category */
export const setCategory = (value) => {
  if (value === "all") {
    return 0;
  } else if (value === "clothes") {
    return 1;
  } else if (value === "tech") {
    return 2;
  }
};

export function CurrentState() {
  // Rule 2: call hooks in function component
  const currCount = useSelector((state) => state.counter.count); // Rule 1: call hooks in top-level
  return currCount;
}
