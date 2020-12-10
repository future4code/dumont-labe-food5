//Styled Components da SignUpPage
import styled from "styled-components"

export const Wrapper = styled.div`
    margin: 0;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const Title = styled.h2`
    width: 18.5rem;
    height: 1.125rem;
    font-family: Roboto;
    font-size: 1.5rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);
`

export const LogoSignUp = styled.img`
    width: 6.5rem;
    height: 3.625rem;
    margin: 1.5rem 8rem 1rem;
    object-fit: contain;
`
export const SignUpPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  strong {
    font-weight: regular;
    :hover {
      color: #e8222e;
    }
  }`