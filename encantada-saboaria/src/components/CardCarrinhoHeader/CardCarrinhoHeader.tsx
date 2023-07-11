import React from "react";
import { Main, Photo, InfoProduct, NameAndDelete, Icon } from "./Styles";
import { BsTrash } from "react-icons/bs";
import { useGlobal } from "../../Global/GlobalStateContext";
import IProps from "../../interface/IProps";


export default function CardCarrinhoHeader({
  nome,
  foto,
  preco,
  id,
  descricao,
  quantidade
}: IProps) {

    const { removeToCart } = useGlobal();

   
  return (
    <Main>
      <Photo
        style={{
          backgroundImage: `url(${foto})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <InfoProduct>
        <NameAndDelete>
          <p>{nome}</p>
          <Icon onClick={() => removeToCart(id)}><BsTrash/></Icon>
          
        </NameAndDelete>
        <p>Quantidade:{quantidade}</p>
        <p>Preço:{preco * quantidade}</p>
      </InfoProduct>
    </Main>
  );
}
