import React from "react";
import { Main, DivRow2, DivRow3, DivPhoto, DivText } from "./Styles";

export default function Product3(props: any) {
  return (
    <Main>
      <DivRow2>
        <DivPhoto></DivPhoto>
        <DivText>
          <p>Natural Wholesale Press Soap</p>
          <div></div>
          <p className="price">$52.00</p>
        </DivText>
      </DivRow2>
      <DivRow2>
        <DivPhoto></DivPhoto>
        <DivText>
        <p>Natural Wholesale Press Soap</p>
          <div></div>
          <p className="price">$52.00</p>
        </DivText>
      </DivRow2>
      <DivRow3>
        <DivPhoto></DivPhoto>
        <DivText>
        <p>Natural Wholesale Press Soap</p>
          <div></div>
          <p className="price">$52.00</p>
        </DivText>
      </DivRow3>
    </Main>
  );
}