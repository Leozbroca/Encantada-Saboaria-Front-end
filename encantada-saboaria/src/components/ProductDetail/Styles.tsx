import styled from "styled-components";

export const Star = styled.div`
  width: 95%;
  max-width: 140px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  @media (max-width: 600px) {
    align-items: flex-start;
    margin-left: 50px;
  }
`;
export const ImageDetail = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;
