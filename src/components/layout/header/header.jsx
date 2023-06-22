import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/layout/nav/nav";
import { StyledHeader } from "./styled";

import React from "react";

function Header() {
  return (
    <StyledHeader as="header">
      <Logo />
      <Nav />
    </StyledHeader>
  );
}

export default Header;
