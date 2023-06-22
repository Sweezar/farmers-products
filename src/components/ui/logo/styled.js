import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 44px;

  &:hover {
    text-decoration: none;
  }
`;

export const LogoText = styled.span`
  color: #333333;
  font-weight: 700;
  font-size: 28px;
  line-height: 115%;
  margin-left: 28px;
`;
