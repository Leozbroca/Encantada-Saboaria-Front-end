import styled from "styled-components";

export const Main = styled.div`
  min-height: 100vh;
  padding: 0px 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  p{
    text-align: center;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: bold;
  }
  div{
    width: 100%;
  }
`;

export const Form = styled.form`
  
  textarea {
    height: 200px;
    width: 100%;
    font-size: 30px;
  }
`;

export const InputContact = styled.input`
  padding: 0 25px;
  height: 55px;
  width: 97%;
  margin-bottom: 5px;
  border-radius: unset;
  background: #f4f4f4;
  border: 0;
  font-size: 1rem;
  color: #495057;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-font-smoothing: antialiased;
`;

export const ButtonSendForm = styled.button`
  height: 55px;
  border: 0;
  padding: 0 45px;
  letter-spacing: 3.2px;
  text-transform: uppercase;
  background-color: #000000;
  width: 100%;
  color: #fff;
  cursor: pointer;
  border-radius: 0;
  font-size: 12px;
  font-weight: 600;
  transition: 0.3s;
  text-align: center;
  white-space: nowrap;
  :hover {
    background-color: #efbae1;
    cursor: pointer;
  }
`;
