import styled from "styled-components";

const Form = styled.form`
  position: relative;
  display: block;
  width: ${(props) => props.$width}px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colorWhite};
`;

export default Form;
