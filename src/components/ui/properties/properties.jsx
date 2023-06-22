import React from "react";
import { Line, Bold } from "./styled";

export default function Properties({ energyValue, nutritionalValue }) {
  return (
    <>
      <Line>
        <Bold>Энергетическая ценность:</Bold> {energyValue.kc} ккал./
        {energyValue.kj} кДж.
      </Line>
      <Line>
        <Bold>Пищевая ценность: </Bold> белки - {nutritionalValue.proteins} г.,
        жиры - {nutritionalValue.fats} г., углеводы -{" "}
        {nutritionalValue.carbohydrates} г.; на 100 г.
      </Line>
    </>
  );
}
