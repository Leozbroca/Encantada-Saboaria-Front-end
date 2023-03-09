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

  return (
    <div>
      <ProductsScreen>{productsList}</ProductsScreen>
      <Pagination>
        <SpanPagination onClick={()=>setPage(1)}>1</SpanPagination>
        <SpanPagination onClick={()=>setPage(2)}>2</SpanPagination>
      </Pagination>
    </div>
  );
};
export default ProductPage;



