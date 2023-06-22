import { Swiper } from "swiper/react";
import styled from "styled-components";
import Button from "/src/components/ui/button/button";

export const StyledSwiper = styled(Swiper)`
  width: 248px;
  height: 248px;
`;

export const StyledSlide = styled.img`
  width: 248px;
  height: auto;
`;

export const StyledButtonLeft = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: 0;
  top: auto;
  bottom: 10px;
  right: 84px;
  height: 28px;
  min-height: 14px;
  width: 28px;
  border-radius: 50%;
  padding: 0;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colorForPriceBackground};
  color: ${(props) => props.theme.colorBlackForText};
  z-index: 1;

  &:hover {
    box-shadow: none;
  }
`;

export const StyledButtonRight = styled(StyledButtonLeft)`
  right: 10px;
`;

export const SlidesNum = styled.span`
  position: absolute;
  top: auto;
  bottom: 10px;
  right: 44px;
  color: ${(props) => props.theme.colorWhite};
  z-index: 1;
`;

export const StyledButton = styled(StyledButtonLeft)`
  bottom: 50px;
`;
