import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 22.5rem;
  height: 40rem;
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