import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { useState } from "react";
import CardProduto from "../../components/CardProduct/CardProduto";
import ModalFilter from "../../components/modalFilter/modalFilter";
import { Url } from "../../constants/Url";
import useRequestData from "../../hooks/useRequestData";
import { IProducts } from "../homepage/Homepage";
import { AiFillFilter } from "react-icons/ai";
import {
  Filter,
  Main,
  Pagination,
  ProductsScreen,
  SpanPagination,
  ProductNotFound,
  MainFilterProduct,
  ButtonFilter,
  PhotoBackgroundProduct,
  ButtonOfferProduct,
  OptionSelect,
} from "./Styles";
import { Select, Stack } from "@chakra-ui/react";
import PaginationOutlined from "../../components/Pagination/pagination";
import React from "react";

export interface IFilter {
  nome: string;
  _id: string;
}
const ProductPage = () => {
  const [page, setPage] = React.useState(1);
  const [priceFilter, setPriceFilter] = useState("crescente");
  const [priceCategory, setPriceCategory] = useState(0);
  const [filterEssence, setFilterEssence] = useState<IFilter>({
    nome: "",
    _id: "",
  });
  const { isOpen, onToggle } = useDisclosure();

  const products: IProducts[] = useRequestData([], `${Url}/products?page=${page}`);

  const productsList = products
    .filter((product: IProducts) =>
      filterEssence.nome ? product.categoria_id === filterEssence._id : true
    )
    .filter((product: IProducts) =>
      priceCategory
        ? priceCategory >= product.preco && product.preco >= priceCategory - 10
        : true
    )
    .sort((firstProduct: IProducts, secondProduct: IProducts) =>
      priceFilter === "crescente"
        ? firstProduct.preco - secondProduct.preco
        : secondProduct.preco - firstProduct.preco
    );
  return (
    <Main>
      <PhotoBackgroundProduct>
        <h1>Produtos</h1>
        <p>home {">"} Produtos</p>
      </PhotoBackgroundProduct>
      <ButtonFilter>
        <Button
          onClick={onToggle}
          fontSize="15px"
          leftIcon={<AiFillFilter />}
          _hover={{ background: "#ebbaa9" }}
          variant="outline"
        >
          Filtro
        </Button>
        <Stack spacing={3}>
          <Select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            variant="outline"
            _hover={{ color: "#efbae1", cursor: "pointer" }}
          >
            <OptionSelect value="crescente">Crescente</OptionSelect>
            <OptionSelect value="decrescente">Decrescente</OptionSelect>
          </Select>
        </Stack>
      </ButtonFilter>
      <MainFilterProduct>
        <Filter>
          <ModalFilter
            isOpen={isOpen}
            setFilterEssence={setFilterEssence}
            setPriceCategory={setPriceCategory}
          />
        </Filter>
        <ProductsScreen>
          {productsList.length > 0 ? (
            productsList.map((product: IProducts, index: number) => {
              return (
                <CardProduto
                  key={product._id}
                  descricao={product.descricao}
                  id={product._id}
                  nome={product.nome}
                  foto={product.foto}
                  preco={product.preco}
                />
              );
            })
          ) : (
            <ProductNotFound>
              <p>Não há produtos com essa categoria ou preço</p>
            </ProductNotFound>
          )}
        </ProductsScreen>
      </MainFilterProduct>
      <Pagination>
        <PaginationOutlined setPage={setPage} />
      </Pagination>
    </Main>
  );
};
export default ProductPage;
