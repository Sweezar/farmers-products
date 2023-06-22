import React from "react";
import { Wrapper, StyledList, StyledListItem } from "./styled";
import ProductCard from "/src/components/ui/product-card/product-card";

export default function Products({ products, className }) {
  return (
    <>
      <Wrapper className={className}>
        {products?.length ? (
          <>
            <StyledList>
              {products.map((product) => (
                <StyledListItem key={product.id}>
                  <ProductCard {...product} />
                </StyledListItem>
              ))}
            </StyledList>
          </>
        ) : null}
      </Wrapper>
    </>
  );
}
