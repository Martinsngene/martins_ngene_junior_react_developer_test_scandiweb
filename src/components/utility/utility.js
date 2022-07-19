// These are some functions to help the parsing of data in this application

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";

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

// Custom useParams to get the id of each product for filter
export function withRouter(Component) {
  function ComponentWithRouter(props) {
    let params = useParams();
    return <Component {...props} params={params} />;
  }
  return ComponentWithRouter;
}

// export function withUseQuery(Component) {
//   function ComponentWithRouter(props) {
//     let params = useQuery();
//     return <Component {...props} params={params} />;
//   }
//   return ComponentWithRouter;
// }

// To filter category and choose template to render product detail

export const filterProductAttributes = (value) => {
  for (let item of value) {
    if (item.id === "Color") {
      return true;
    } else {
      return false;
    }
  }
};
