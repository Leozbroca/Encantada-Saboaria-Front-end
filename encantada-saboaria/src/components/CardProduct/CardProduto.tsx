import React from "react";
import { Main, Photo, DivRow, IconRow } from "./Styles";
import {
  AiOutlineShopping,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { IconContext } from "react-icons";
import { useGlobal } from "../../Global/GlobalStateContext";
import { CartPurchase } from "../../Global/GlobalState";
import { goTo } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@chakra-ui/react";

interface IProps {
  id: string;
  nome: string;
  foto: string;
  preco: number;
  descricao: string;
}
export default function CardProduto({
  nome,
  foto,
  preco,
  id,
  descricao,
}: IProps) {
  const { addToCart } = useGlobal();

  const objetoCart: CartPurchase = {
    id,
    total: preco,
    nome,
    descricao,
    foto,
    preco,
    quantidade:1
  };
  const navigate = useNavigate();
  // onClick={()=>goTo(navigate,`/produto/${id}`)}
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
          <Tooltip hasArrow label="Adicionar ao carrinho" placement="top">
            <IconRow onClick={() => addToCart(objetoCart)}>
              <IconContext.Provider
                value={{ className: "global-class-name", size: "1.5em" }}
              >
                <AiOutlineShopping />
              </IconContext.Provider>
            </IconRow>
          </Tooltip>
          <Tooltip hasArrow label="Página do produto" placement="top">
            <IconRow onClick={() => goTo(navigate, `/produto/${id}`)}>
              <IconContext.Provider
                value={{ className: "global-class-name", size: "1.5em" }}
              >
                <AiOutlineSearch />
              </IconContext.Provider>
            </IconRow>
          </Tooltip>
          <Tooltip hasArrow label="Adicionar à lista de desejos" placement="top">
            <IconRow>
              <IconContext.Provider
                value={{ className: "global-class-name", size: "1.5em" }}
              >
                <AiOutlineHeart />
              </IconContext.Provider>
            </IconRow>
          </Tooltip>
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
