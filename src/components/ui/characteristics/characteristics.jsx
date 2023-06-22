import React from "react";
import { Line, Bold } from "./styled";

export default function Characteristics({
  weight,
  expirationDate,
  species,
  origin
}) {
  return (
    <>
      <Line>
        <Bold>Масса:</Bold> {weight.kg} кг. ({weight.g} г.).
      </Line>
      <Line>
        <Bold>Срок годности:</Bold> {expirationDate} суток
      </Line>
      <Line>
        <Bold>Порода:</Bold> {species}
      </Line>
      <Line>
        <Bold>Место происхождения:</Bold> {origin}
      </Line>
    </>
  );
}
