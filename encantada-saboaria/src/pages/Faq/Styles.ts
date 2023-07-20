import styled from "styled-components";
import banner from "../../assets/insta1.jpeg";

export const MainFaq = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;

  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const PhotoBackgroundFaq = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${banner});
  background-size: cover;
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: white;
    font-size: 16px;
    margin: 0;
  }

  h1 {
    color: white;
    font-size: 40px;
  }
`;

export const Questions = styled.div`
  width: 80%;
  margin: 10px;
  min-height: 50%;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const FrequentyQuestions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 20%;
  margin: 10px;
  border-bottom: 1px solid black;
  padding: 30px;
  h2 {
    font-weight: bold;
    font-size: 2em;
  }
  p {
    font-style: italic;
  }
`;

export const AllQuestions = styled.div`
  width: 100%;
  height: 70%;
`;
