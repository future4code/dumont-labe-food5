import styled from "styled-components";

//Styled Components do componente Header

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  margin-top: 0;
  padding: 0 3vw;
  height: 6vh;
  border-bottom: 1px solid black;
  justify-content: space-between;
  margin-bottom: 3vh;
  align-items: center; 
p {
  margin-right: 5vw;
  :hover {
    color: #e8222e;
  }
}
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0px;
`;

export const SmallContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 6vh;
`;
