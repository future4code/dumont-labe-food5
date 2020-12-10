import styled from "styled-components";

//Styled Components do componente Header

export const HeaderContainer = styled.header`
  display: flex;
  width: 100vw;
  margin-top: 0;
  padding: 0 3vw;
  height: 6vh;
  border-bottom: 1px solid black;
  justify-content: space-between;
  margin-bottom: 3vh;
  align-items: center;

  h1 {
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: black;
  }
  p {
    margin-right: 5vw;
    :hover {
      color: #e8222e;
    }
  }
`;
