import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const FilterArea = ({ setInputRange, inputRange,filterByRate }) => {
  return (
    <div>
      <InputRange
        maxValue={10}
        minValue={0}
        value={inputRange}
        onChange={(range) => {
          setInputRange(range);
          filterByRate(range);
        }}
      />
    </div>
  );
};
export default FilterArea;
