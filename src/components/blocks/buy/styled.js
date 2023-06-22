import styled, { css } from "styled-components";
import Title from "/src/components/ui/title/title";
import { Ul, Li } from "/src/styled";
import Button from "/src/components/ui/button/button";
import checkboxSelect from "/src/assets/input-check-icon.svg";
import Price from "/src/components/ui/price/price";

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin-top: 18px;
  padding: 24px 20px 12px 20px;
  background-color: ${(props) => props.theme.colorForLightBackground};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);

  &:nth-child(1) {
    margin-top: 0;
  }
`;

export const StyledUl = styled(Ul)`
  margin-top: 12px;
`;

export const StyledTitle = styled(Title)`
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: 700;
  line-height: 150%;
`;

export const StyledLi = styled(Li)`
  padding: 14px 0;
  position: relative;
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  text-align: left;
  align-items: center;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizeDefault};

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: ${props.theme.colorForButton};
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.colorForGreyBackground};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;

export const AddressInput = styled.input`
  margin-top: 24px;
  box-sizing: border-box;
  width: 100%;
  padding: 12px 13px;
  background: ${(props) => props.theme.colorForGreyBackground};
  border: 1px solid rgba(0, 0, 0, 0.1);

  &::placeholder {
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeSmall};
    color: ${(props) => props.theme.colorBlackForText};
  }
`;

export const Text = styled.p`
  margin: 0;
  margin-top: 20px;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizeSmall};
  color: ${(props) => props.theme.colorBlackForText};
`;

export const StyledPrice = styled(Price)`
  margin-top: 8px;
`;

export const StyledButton = styled(Button)`
  margin-top: 32px;
  margin-bottom: 8px;
  width: ${(props) => props.$width}px;
`;
