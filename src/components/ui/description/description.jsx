import React from "react";
import { DescriptionText, Price } from "./styled";

export default function Description({ text, price, weight }) {
  return (
    <>
      <DescriptionText>{text}</DescriptionText>
      <Price>
        {price} руб. / {weight * 1000} гр
      </Price>
    </>
  );
}
