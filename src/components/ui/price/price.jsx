import React from "react";
import { StyledPrice } from "./styled";

export default function Price({ className, value }) {
  return <StyledPrice className={className}>{value} руб</StyledPrice>;
}
