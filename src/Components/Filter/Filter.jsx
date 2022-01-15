import React from "react";
import { Input } from "./Filter.styled";

const Filter = ({ onSearchInput, value }) => {
  return <Input type="text" value={value} onChange={onSearchInput} />;
};

export default Filter;
