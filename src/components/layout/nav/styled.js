import styled from "styled-components";
import Button from "/src/components/ui/button/button";

export const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colorForLightBackground};
  color: ${(props) => props.theme.colorBlackForText};
`;
