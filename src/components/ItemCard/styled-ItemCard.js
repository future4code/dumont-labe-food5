import styled from "styled-components";


export const Page = styled.div `
    display: flex;
    flex-direction: row;
`
export const ItemCardContainer = styled.div`
    display:flex;
    width: 20.5rem;
    height: 7rem;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    margin:auto;
    margin-bottom:5vh;
    img{
        width: 6rem;
        height: 7rem;
    }
    h2{
        font-family: Roboto;
        font-size: 1rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #e8222e;
    }
    p:nth-child(2){
        font-family: Roboto;
        font-size: 0.75rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.29px;
        color: #b8b8b8;
    }
    p:nth-child(3){
        font-family: Roboto;
        font-size: 1rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: black;
    }
    button{
        margin: 0.438rem 0 0 0.5rem;
        width: 5.625rem;
        height: 1.938rem;
        padding: 0.5rem 1.281rem 0.563rem 1.344rem;
        border-top-left-radius: 8px;
        border-bottom-right-radius:8px;
        border: solid 1px black;
        background-color:white;
        align-self:flex-end;
        justify-self:flex-end;
        font-family: Roboto;
        font-size: 0.75rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.29px;
        text-align: center;
        color:black;
        
    `;
export const InfoContainer = styled.div`
  margin-left: 3vw;
`;
