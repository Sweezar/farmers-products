import styled from "styled-components";
import Title from "/src/components/ui/title/title";
import Tabs from "/src/components/ui/tabs/tabs";

export const ProductCardWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colorForLightBackground};
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
`;

export const SliderWrapper = styled.div``;

export const DescriptionWrapper = styled.div`
  width: 100%;
  max-height: 248px;
  margin-left: 20px;
`;

export const StyledTitle = styled(Title)`
  line-height: 130%;
`;

export const StyledTabs = styled(Tabs)`
  margin-top: 16px;
`;
