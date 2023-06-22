import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
  display: block;
  width: ${(props) => props.$width}px;
  min-height: 60px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colorForButton};
  border: none;
  color: ${(props) => props.theme.colorWhite};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 58px;
  text-decoration: none;
  text-align: center;
  padding: 0px 24px;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }
`;

export default StyledButton;
