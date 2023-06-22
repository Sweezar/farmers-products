import React from "react";
import { Label, VisuallyHiddenInput } from "/src/styled";

export default function Checkbox({
  labelComponent,
  text,
  value,
  name,
  onChange,
  onClick,
  isChecked,
  ...props
}) {
  const LabelComponent = labelComponent;

  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        name={name}
        onChange={() => onChange(value)}
        {...props}
        type="checkbox"
      />
      <LabelComponent onClick={() => onClick(value)} $isChecked={isChecked}>
        {text}
      </LabelComponent>
    </Label>
  );
}
