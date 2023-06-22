import React from "react";
import Title from "/src/components/ui/title/title";
import AdvantageCard from "/src/components/ui/advantage-card/advantage-card";
import { TitleLevel } from "/src/components/ui/title/title";
import {
  StyledSection,
  ListWrapper,
  StyledList,
  StyledListItem,
  StyledButton
} from "./styled";

function Advantages({ advantages }) {
  return (
    <StyledSection>
      <ListWrapper>
        {advantages?.length ? (
          <>
            <Title level={TitleLevel.H2}>
              Почему фермерские продукты лучше?
            </Title>
            <StyledList>
              {advantages.map((advantage) => (
                <StyledListItem key={advantage.id}>
                  <AdvantageCard {...advantage} />
                </StyledListItem>
              ))}
            </StyledList>
          </>
        ) : null}

        <StyledButton link="/buy">Купить</StyledButton>
      </ListWrapper>
    </StyledSection>
  );
}

export default Advantages;
