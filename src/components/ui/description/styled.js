import styled from "styled-components";

export const DescriptionText = styled.p`
  margin: 0;
  padding: 0;
  height: 103px;
  margin-top: 16px;
  font-size: ${(props) => props.theme.fontSizeSmall};
  overflow-y: scroll;
`;

export const Price = styled.span`
  display: inline-block;
  margin-top: 14px;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizeSmall};
  padding: 4px 8px;
  background-color: ${(props) => props.theme.colorForPriceBackground};
`;
