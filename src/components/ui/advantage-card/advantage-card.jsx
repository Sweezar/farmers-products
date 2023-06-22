import React from "react";
import { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { Article, StyledTitle, Label, Image, Text } from "./styled";

const AdvantageType = {
  farmer: "Фермерские продукты",
  shop: "Магазинные продукты"
};

function TypeStyles(type) {
  let option;

  if (type === "farmer") {
    option = {
      advantageBgColor: "#e1edce",
      labelBgColor: "#88aa4d"
    };
  }
  if (type === "shop") {
    option = {
      advantageBgColor: "#f8ddd7",
      labelBgColor: "#f75531"
    };
  }
  return option;
}

function AdvantageCard({ type, title, image, about }) {
  return (
    <Article $bgColor={TypeStyles(type).advantageBgColor}>
      <Image src={image} alt="" width={52} height={52} />
      <Label $bgColor={TypeStyles(type).labelBgColor}>
        {AdvantageType[type]}
      </Label>
      <StyledTitle size={TitleSize.SMALL} level={TitleLevel.H3}>
        {title}
      </StyledTitle>
      <Text className="advantage-card__text">{about}</Text>
    </Article>
  );
}

export default AdvantageCard;
