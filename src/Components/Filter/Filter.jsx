import React from "react";

const Filter = ({ onSearchInput, value }) => {
  return <input type="text" value={value} onChange={onSearchInput} />;
};

export default Filter;
