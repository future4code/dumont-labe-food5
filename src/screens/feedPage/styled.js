import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 22.5rem;
  height: 40rem;
`;

export const InputStyle = styled.input`
  width: 20.5rem;
  height: 3.5rem;
  padding: 1rem 0.503rem 1rem 1.063rem;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 22.5rem;
  height: 2.625rem;
  margin: 0.5rem 0 10vh;
  padding: 0.75rem 0 0.75rem 1rem;
`;

export const CardImg = styled.img`
  width: 20.5rem;
  height: 7.5rem;
  margin: 0 0 0.75rem;
  object-fit: contain;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20.5rem;
  height: 11.75rem;
  padding: 0 0 1rem;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
`;
export const CardDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BottomBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 22.5rem;
  height: 3.063rem;
  margin: 0.813rem 0 0;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2),
    0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
  position: sticky;
`;
export const Categories = styled.p`
  width: 5.438rem;
  height: 1.125rem;
  margin: 0 0.5rem 0 0;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: black;
  :hover {
    color: #e8222e;
  }
`;
