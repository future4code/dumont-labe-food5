import styled from "styled-components";

//Styled Components do componente Header

export const HeaderContainer = styled.header`
  width: 100vw;
  margin-top: 0;
  padding-left: 3vw;
  height: 6vh;
  border-bottom: 1px solid black;
  justify-content: center;
  margin-bottom: 3vh;
  img {
    position: absolute;
    top: 1vh;
    left: 3vw;
  }
  h1 {
    width: 2.688rem;
    height: 1.188rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);
    margin: auto;
    padding-top: 1vh;
  }
`;
