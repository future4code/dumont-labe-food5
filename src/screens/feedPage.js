import React from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 22.5rem;
    height: 40rem;
`

const InputStyle = styled.input`
    width: 20.5rem;
    height: 3.5rem;
    padding: 1rem 0.503rem 1rem 1.063rem;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 22.5rem;
    height: 2.625rem;
    margin: 0.5rem 0 0;
    padding: 0.75rem 0 0.75rem 1rem;
`

const CardImg = styled.img`
    width: 20.5rem;
    height: 7.5rem;
    margin: 0 0 0.75rem;
    object-fit: contain;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20.5rem;
    height: 11.75rem;
    padding: 0 0 1rem;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
`
const CardDetail = styled.div`
    display: flex;
    justify-content: space-between;
`

const BottomBar = styled.div`
    display: flex;
    justify-content: space-around;
    width: 22.5rem;
    height: 3.063rem;
    margin: 0.813rem 0 0;
    box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
    background-color: #ffffff;
    position: sticky;
`


function FeedPage() {

    return(
        <PageContainer>
            <h4>4Food</h4>
            <form>
                <InputStyle />
            </form>
            <FilterContainer>
                <p>Burger</p>
                <p>Asiática</p>
                <p>Massas</p>
                <p>Saudáveis</p>
            </FilterContainer>
            <CardContainer>
                <CardImg src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/C78C3992-5FF3-4F52-8632-E1CA759C9C9F.png" />
                <p>Vinil Butantã</p>
                <CardDetail>
                    <p>50 - 60 min</p>
                    <p>Frete R$ 6,00</p>
                </CardDetail>
            </CardContainer>
            <BottomBar>
                <img src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/E718CCC7-08DF-4BEA-B3D1-8DCB3E8A3BA5.svg" />
                <img src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/31E0BDE3-26B3-421A-AEC5-883D098413D6.svg" />
                <img src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/3725C74F-82A8-4E32-9948-8CBFC09C877F.svg" />
            </BottomBar>
        </PageContainer>
    )
}

export default FeedPage