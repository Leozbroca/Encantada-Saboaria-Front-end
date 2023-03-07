import React from "react";
import { Main, DivRow2, DivRow3, DivPhoto, DivText } from "./Styles";

export default function Product3(props: any) {
  return (
    <Main>
      <DivRow2>
        <DivPhoto></DivPhoto>
        <DivText></DivText>
      </DivRow2>
      <DivRow2>
        <DivPhoto></DivPhoto>
        <DivText></DivText>
      </DivRow2>
      <DivRow3>
        //arrumar responsividade photo
        <DivPhoto></DivPhoto>
        <DivText></DivText>
      </DivRow3>
    </Main>
  );
}
