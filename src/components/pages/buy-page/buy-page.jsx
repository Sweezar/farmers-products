import React from "react";
import Buy from "/src/components/blocks/buy/buy";
import { StyledSection, StyledProducts } from "./styled";

export default function BuyPage({ products }) {
  return (
    <StyledSection>
      <Buy products={products} />
      <StyledProducts products={products} />
    </StyledSection>
  );
}
