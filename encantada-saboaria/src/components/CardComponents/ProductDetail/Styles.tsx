import styled from "styled-components";

export const MainProductDetail = styled.main`
  margin-bottom: 4rem;
  
  @media (min-width: 600px) {
    width: 90%;
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    column-gap: 2rem;
    padding-bottom: 5rem;
    padding-top: 4rem;
    margin-inline: auto;
  }
`;

export const ImageSection = styled.div`
  max-width: 400px;
  margin-inline: auto;
  width: 100%;
`;

export const ProductImage = styled.div`
  display: flex;
  align-items: center;
  min-height: 400px;
  border-radius: 10px;
  justify-content: space-between;

  button {
    margin-inline: 20px;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;

    img {
      max-width: 0.55rem;
    }
  }
`;

export const ProductInfo = styled.div`
  max-width: 400px;
  margin-inline: auto;
  padding-inline: 10%;

  div {
    h1 {
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
    }
    p {
      font-style: italic;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.6em;
      color: #68707d;
      margin-block: 20px;
    }
  }
`;

export const ProductPrice = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-size: 2em;
`;

export const Price = styled.div`
  width: 100%;
`;

export const ProductCartButton = styled.button`
  width: 100%;
  background: #00033d;
  color: white;
  font-size: 0.9rem;
  padding-block: 0.8rem;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 4px 0px hsla(0, 0%, 0%, 0.5);
  cursor: pointer;

  img {
    margin-right: 20px;
    max-width: 1rem;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(308deg)
      brightness(103%) contrast(151%);
  }
`;

export const ImagemProduct = styled.div`
  width: 400px;
  margin-inline: auto;
  width: 100%;
`;

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
