import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { StyledFooter, StyledCopyright } from "./styled";

function Footer() {
  return (
    <StyledFooter as="footer">
      <Logo />
      <StyledCopyright>Создано 2021</StyledCopyright>
    </StyledFooter>
  );
}

export default Footer;
