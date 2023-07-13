import React from "react";
import { Main, Photo, DivRow, IconRow } from "./Styles";
import {
  AiOutlineShopping,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { IconContext } from "react-icons";
import { useGlobal } from "../../Global/GlobalStateContext";
import { goTo } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@chakra-ui/react";
import IProps from "../../interface/IProps";
import ICartPurchase from "../../interface/ICartPurchase";

export default function CardProduto({
  nome,
  foto,
  preco,
  id,
  descricao,
}: IProps) {
  const { addToCart  , addToWish} = useGlobal();

  const objetoCart: ICartPurchase = {
    id,
    total: preco,
    nome,
    descricao,
    foto,
    preco,
    quantidade: 1,
  };

  const navigate = useNavigate();
  
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
            <IconRow onClick={() => goTo(navigate, `/product/${id}`)}>
              <IconContext.Provider
                value={{ className: "global-class-name", size: "1.5em" }}
              >
                <AiOutlineSearch />
              </IconContext.Provider>
            </IconRow>
          </Tooltip>
          <Tooltip
            hasArrow
            label="Adicionar à lista de desejos"
            placement="top"
          >
            <IconRow onClick={() => addToWish(objetoCart)}>
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
