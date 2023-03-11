import React from "react";
import { Main, Photo, DivRow, IconRow } from "./Styles";
import { AiOutlineShopping } from "react-icons/ai";
import { IconContext } from "react-icons";

interface IProps {
  nome: string;
  foto: string;
  preco: number;
}
export default function CardProduto({ nome, foto, preco }: IProps) {
  return (
    <Main>
      <Photo
        style={{
          backgroundImage: `url(${foto})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <DivRow className="divInvi">
          <IconRow>
            <IconContext.Provider
              value={{ className: "global-class-name", size: "1.5em" }}
            >
              <AiOutlineShopping />
            </IconContext.Provider>
          </IconRow>
          <IconRow>
            <IconContext.Provider
              value={{ className: "global-class-name", size: "1.5em" }}
            >
              <AiOutlineShopping />
            </IconContext.Provider>
          </IconRow>
          <IconRow>
            <IconContext.Provider
              value={{ className: "global-class-name", size: "1.5em" }}
            >
              <AiOutlineShopping />
            </IconContext.Provider>
          </IconRow>
        </DivRow>
      </Photo>

      <p className="nome">{nome}</p>
      <p className="preco">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(preco)}
      </p>
    </Main>
  );
}
