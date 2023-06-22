import styled from "styled-components";
import { Section } from "/src/styled";

export const StyledHeader = styled(Section)`
  width: ${(props) => props.theme.pageWidth};
  height: ${(props) => props.theme.headerHeight};
  padding-top: 0;
  padding-bottom: 0;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;
