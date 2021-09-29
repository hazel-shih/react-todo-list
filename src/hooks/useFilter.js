import { useState } from "react";

function useFilter() {
  const [filter, setFilter] = useState("all");

  function handleFilter(btnName) {
    setFilter(btnName);
  }

  return {
    filter,
    setFilter,
    handleFilter,
  };
}

export default useFilter;
