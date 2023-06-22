import styled from "styled-components";
import { Section } from "/src/styled";
import Copyright from "/src/components/ui/copyright/copyright";

export const StyledFooter = styled(Section)`
  width: ${(props) => props.theme.pageWidth};
  height: ${(props) => props.theme.footerHeight};
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 0;
  padding-bottom: 0;
  background-color: ${(props) => props.theme.colorForLightBackground};
`;

export const StyledCopyright = styled(Copyright)`
  margin-left: auto;
`;
