import React from "react";
import Checkbox from "/src/components/ui/checkbox/checkbox";
import { Ul, Li } from "/src/styled";

export default function CheckboxList({
  filters,
  selectValues,
  labelComponent,
  name,
  onChange,
  onClickLabel = () => {}
}) {
  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };

  return (
    <Ul>
      {filters.map((filter, index) => (
        <Li key={filter.id}>
          <Checkbox
            labelComponent={labelComponent}
            selectValues={selectValues}
            isChecked={selectValues.includes(filter.id)}
            name={name}
            value={filter.id}
            text={filter.title}
            onClick={(value) => onClickLabel(value, index)}
            onChange={handleChange}
          />
        </Li>
      ))}
    </Ul>
  );
}
