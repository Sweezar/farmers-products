import React, { useState } from "react";
import CheckboxList from "/src/components/ui/checkbox-list/checkbox-list";
import {
  StyledTitle,
  Wrapper,
  AddressInput,
  Text,
  StyledPrice,
  StyledButton,
  CheckboxLabel
} from "./styled";
import { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { Form } from "/src/styled";

export default function Buy({ products }) {
  const [selectProductsIds, setSelectProductsIds] = useState([]);

  const selectProducts = selectProductsIds.map((id) =>
    products.find((product) => product.id === id)
  );
  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );

  return (
    <div>
      <Form $width={353}>
        <Wrapper>
          <StyledTitle level={TitleLevel.H3} size={TitleSize.SMALL}>
            Выберите продукты
          </StyledTitle>
          <CheckboxList
            filters={products}
            selectValues={selectProductsIds}
            labelComponent={CheckboxLabel}
            name={"select-products"}
            onChange={setSelectProductsIds}
          />
        </Wrapper>
        <Wrapper>
          <StyledTitle level={TitleLevel.H3} size={TitleSize.SMALL}>
            Сделать заказ
          </StyledTitle>
          <AddressInput
            type="text"
            name="address"
            placeholder="Введите адрес доставки"
          />
          <Text>Цена</Text>
          <StyledPrice value={fullPrice} />
          <StyledButton $width={314}>Купить</StyledButton>
        </Wrapper>
      </Form>
    </div>
  );
}
