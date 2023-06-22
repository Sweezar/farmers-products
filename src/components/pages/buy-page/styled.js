import styled from "styled-components";
import { Section } from "/src/styled";
import Products from "/src/components/blocks/products/products";

export const StyledSection = styled(Section)`
  width: ${(props) => props.theme.pageWidth};
  box-sizing: border-box;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  background: ${(props) => props.theme.colorForGreyBackground};
`;

export const StyledProducts = styled(Products)`
  margin-left: 20px;
`;
