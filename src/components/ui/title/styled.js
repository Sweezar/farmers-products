import styled from "styled-components";
import { TitleSize } from "./title";

const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: ${(props) => {
    let fontSize = "36px";
    if (props.$size === TitleSize.BIG) {
      fontSize = "44px";
    }
    if (props.$size === TitleSize.SMALL) {
      fontSize = "18px";
    }
    if (props.$size === TitleSize.LARGE) {
      fontSize = "24px";
    }
    return fontSize;
  }};
  line-height: 41px;
`;

export default StyledTitle;
