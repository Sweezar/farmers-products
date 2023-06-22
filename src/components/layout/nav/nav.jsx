import React from "react";
import Button from "/src/components/ui/button/button";
import { AppRoute } from "../../../const";
import { useLocation } from "react-router-dom";
import { StyledButton } from "./styled";

const buttons = [
  {
    to: AppRoute.MAIN,
    item: (
      <StyledButton link={AppRoute.MAIN} key={AppRoute.MAIN} $width={260}>
        Главная
      </StyledButton>
    )
  },
  {
    to: AppRoute.BUY,
    item: (
      <Button link={AppRoute.BUY} key={AppRoute.BUY} $width={260}>
        Купить
      </Button>
    )
  }
];

function Nav() {
  const pageUrl = useLocation().pathname;

  return (
    <nav>
      {buttons
        .filter((button) => button.to !== pageUrl)
        .map((button) => button.item)}
    </nav>
  );
}

export default Nav;
