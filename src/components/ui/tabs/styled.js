import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const TitleList = styled.div`
  display: inline-flex;
`;

export const TitleButton = styled.button`
  display: block;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colorForGreyBackground};
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colorBlackForText};
  font-size: ${(props) => props.theme.fontSizeSmall};
  line-height: 21px;
  text-decoration: none;
  text-align: center;
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? "#88AA4D" : props.theme.colorForGreyBackground};
  margin-right: 8px;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }
`;

export const TitleText = styled.p`
  margin: 0;
  padding: 0;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) =>
    props.active ? props.theme.colorWhite : props.theme.colorBlackForText};
`;

export const Content = styled.div`
  line-height: 1.5;
  font-size: ${(props) => props.theme.fontSizeSmall};
  box-sizing: border-box;
  text-align: left;
  margin-top: 16px;
`;
