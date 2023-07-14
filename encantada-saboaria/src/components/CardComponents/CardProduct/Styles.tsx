import styled from "styled-components";

export const Main = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Bree Serif", serif;



  .nome {
    font-size: 18px;
    margin: 0px;
    margin-top: 10px;
    transition: 0.5s;
    :hover {
      transition: 0.5s;
      color: pink;
      cursor: pointer;
    }
  }

  .preco {
    font-size: 18px;
    margin: 0px;
    color: pink;
  }
`;

export const Photo = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  :hover {
    .divInvi {
      margin-top: -80px;
      transform: translateY(-50%);
      transition: 0.5s;
      opacity: 1;
      cursor: pointer;
    }
  }

`;

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 60%;
  opacity: 0;
  transition: 0.5s;
`;

export const IconRow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 180px;
  box-shadow: 0px 0px 5px 1px gray;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;

  :hover {
    transition: 0.5s;
    background-color: pink;
    color: white;
  }
`;
