import React from "react";
import Slider from "/src/components/ui/card-slider/card-slider";
import {
  ProductCardWrapper,
  SliderWrapper,
  DescriptionWrapper,
  StyledTabs,
  StyledTitle
} from "./styled";
import { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import Description from "/src/components/ui/description/description";
import Characteristics from "/src/components/ui/characteristics/characteristics";
import Properties from "/src/components/ui/properties/properties";

export default function ProductCard({
  images,
  species,
  origin,
  title,
  description,
  price,
  weight,
  expirationDate,
  energyValue,
  nutritionalValue
}) {
  const tabs = [
    {
      id: 0,
      title: "Описание",
      content: (
        <Description
          text={description}
          price={price}
          weight={weight.kg}
        ></Description>
      )
    },
    {
      id: 1,
      title: "Характеристики",
      content: (
        <Characteristics
          weight={weight}
          expirationDate={expirationDate}
          species={species}
          origin={origin}
        ></Characteristics>
      )
    },
    {
      id: 2,
      title: "Свойства",
      content: (
        <Properties
          energyValue={energyValue}
          nutritionalValue={nutritionalValue}
        ></Properties>
      )
    }
  ];

  return (
    <ProductCardWrapper>
      <SliderWrapper>
        <Slider images={images} />
      </SliderWrapper>
      <DescriptionWrapper>
        <StyledTitle level={TitleLevel.H4} size={TitleSize.LARGE}>
          {title}
        </StyledTitle>
        <StyledTabs tabs={tabs} />
      </DescriptionWrapper>
    </ProductCardWrapper>
  );
}
