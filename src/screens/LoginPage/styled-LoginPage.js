import styled from "styled-components";

// Styled Components da página LoginPage
export const Logo = styled.img``;

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  strong {
    font-weight: regular;
    :hover {
      color: #e8222e;
    }
  }
  h1 {
    margin-top: 5vh;
    width: 18.5rem;
    height: 1.125rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);
  }
`;
