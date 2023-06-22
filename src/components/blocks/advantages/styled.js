import styled from "styled-components";
import { Section, Ul, Li } from "/src/styled";
import Button from "/src/components/ui/button/button";

export const StyledSection = styled(Section)`
  width: ${(props) => props.theme.pageWidth};
  background-color: ${(props) => props.theme.colorForLightBackground};
`;

export const ListWrapper = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const StyledList = styled(Ul)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.indent};
  list-style: none;
  margin-top: 64px;
`;

export const StyledListItem = styled(Li)``;

export const StyledButton = styled(Button)`
  margin-top: 64px;
  margin-left: auto;
  margin-right: auto;
  width: 260px;
`;
