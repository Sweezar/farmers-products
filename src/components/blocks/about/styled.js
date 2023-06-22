import styled from "styled-components";
import { Section } from "/src/styled";
import aboutImage from "/src/assets/about-image.svg";

export const StyledSection = styled(Section)`
  width: ${(props) => props.theme.pageWidth};
  min-height: 600px;
  padding-top: 183px;
  padding-bottom: 183px;
  background-color: ${(props) => props.theme.colorForDarkBackground};

  &::before {
    content: "";
    position: absolute;
    top: 76px;
    right: 90px;
    width: 446px;
    height: 446px;
    background-color: #c4e2ff;
    border-radius: 50%;
  }

  &::after {
    content: "";
    background-image: url(${aboutImage});
    background-repeat: no-repeat;
    position: absolute;
    width: 273px;
    height: 608px;
    top: 56px;
    bottom: 0;
    right: 180px;
    display: block;
  }
`;

export const TextWrapper = styled.div`
  width: 538px;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  margin-top: 24px;
  width: 538px;
`;
