import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { StyledLogo, LogoText } from "./styled";

function Logo() {
  return (
    <StyledLogo to="/">
      <LogoImage />
      <LogoText>Фермерские продукты</LogoText>
    </StyledLogo>
  );
}

export default Logo;
