import { useState } from "react";
import CardProduto from "../../components/CardProduto/CardProduto";
import { Url } from "../../constants/Url";
import useRequestData from "../../hooks/useRequestData";
import { IProducts } from "../homepage/Homepage";
import { Pagination, ProductsScreen, SpanPagination } from "./Styles";

const ProductPage = () => {
  const [page, setPage] = useState(1);
  const products: IProducts[] = useRequestData(
    [],
    `${Url}/products?page=${page}`
  );

  const [clickPage, setClickPage] = useState(false);

  const productsList = products.map((product: IProducts) => {
    return (
      <CardProduto
        key={product.id}
        nome={product.nome}
        foto={product.foto}
        preco={product.preco}
      />
    );
  });

  const onClickPage = (numero: number) => {
    setPage(numero);
    setClickPage(!clickPage);
  };

  return (
    <div>
      <ProductsScreen>{productsList}</ProductsScreen>
      <Pagination>
        <SpanPagination
          activeColor="white"
          activeColor2="pink"
          isActive={clickPage}
          onClick={() => onClickPage(1)}
        >
          1
        </SpanPagination>
        <SpanPagination
          activeColor="pink"
          activeColor2="white"
          isActive={clickPage}
          onClick={() => onClickPage(2)}
        >
          2
        </SpanPagination>
      </Pagination>
      
    </div>
  );
};
export default ProductPage;
