import styled from "styled-components";

//Styled Components do component Input

export const InputContainer = styled.div`
  padding: 5px;
  margin: 10px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  width: 90vw;
  height: 2.625rem;
  :focus {
    outline: 1px dashed red;
  }

  label {
    padding-left: 5px;
    padding-right: 5px;
    position: relative;
    top: -20px;
    left: 20px;
    background-color: white;
    font-family: Roboto;
    font-size: 0.75rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #b8b8b8;
  }
  input {
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    ::placeholder {
      color: #d0d0d0;
    }
    border: none;
    width: 100%;
    :focus {
      outline: 1px dashed red;
    }
  }
`;
