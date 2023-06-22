import styled from "styled-components";
import Title from "/src/components/ui/title/title";

export const Article = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: ${(props) => props.theme.indent};
  height: 100%;
  box-sizing: border-box;
  background-color: ${(props) => props.$bgColor};
`;

export const StyledTitle = styled(Title)`
  margin-left: 72px;
  margin-bottom: ${(props) => props.theme.indent};
  font-weight: 700;
  line-height: 150%;
`;

export const Label = styled.p`
  margin: 0;
  padding: 0;
  margin-left: 72px;
  padding: 2px 10px;
  width: max-content;
  font-size: 14px;
  line-height: 150%;
  color: ${(props) => props.theme.colorWhite};
  margin-bottom: 4px;
  background-color: ${(props) => props.$bgColor};
`;

export const Image = styled.img`
  position: absolute;
  top: 20px;
  left: 22px;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
`;
