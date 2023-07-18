import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { useState } from "react";
import CardProduto from "../../components/CardComponents/CardProduct/CardProduto";
import ModalFilter from "../../components/ModalComponents/modalFilter/modalFilter";
import { Url } from "../../constants/Url";
import useRequestData from "../../hooks/useRequestData";

import { AiFillFilter } from "react-icons/ai";
import {
  Filter,
  Main,
  Pagination,
  ProductsScreen,
  ProductNotFound,
  MainFilterProduct,
  ButtonFilter,
  PhotoBackgroundProduct,
  ButtonOfferProduct,
  OptionSelect,
  FilterButton,
} from "./Styles";
import { Select, Stack } from "@chakra-ui/react";
import PaginationOutlined from "../../components/Pagination/pagination";
import React from "react";
import IProducts from "../../interface/IProducts";
import ModalFilterResponsive from "../../components/ModalComponents/modalFilterResponsive/modalFilterResponsive";

export interface IFilter {
  nome: string;
  _id: string;
}
const ProductPage = () => {
  const [page, setPage] = useState(1);
  const [priceFilter, setPriceFilter] = useState("crescente");
  const [priceCategory, setPriceCategory] = useState(0);
  const [filterEssence, setFilterEssence] = useState<IFilter>({
    nome: "",
    _id: "",
  });
  const { isOpen, onToggle , onClose} = useDisclosure();

  const products: IProducts[] = useRequestData(
    [],
    `${Url}/products?page=${page}`
  );

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

  function filterWidthScreen() {
    if (window.matchMedia("(max-width:767px)").matches) {
      return (
        <ModalFilterResponsive
          isOpen={isOpen}
          onClose={onClose}
          setFilterEssence={setFilterEssence}
          setPriceCategory={setPriceCategory}
        />
      );
    } else {
      return (
        <ModalFilter
          isOpen={isOpen}
          setFilterEssence={setFilterEssence}
          setPriceCategory={setPriceCategory}
        />
      );
    }
  }

  return (
    <Main>
      <PhotoBackgroundProduct>
        <h1>Produtos</h1>
        <p>home {">"} Produtos</p>
      </PhotoBackgroundProduct>
      <ButtonFilter>
        <FilterButton
          color="white"
          background="#00033D"
          onClick={onToggle}
          leftIcon={<AiFillFilter />}
          variant="outline"
        >
          Filtro
        </FilterButton>
        <Stack spacing={3}>
          <Select
            color="white"
            background="#00033D"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            variant="outline"
          >
            <OptionSelect value="crescente">Crescente</OptionSelect>
            <OptionSelect value="decrescente">Decrescente</OptionSelect>
          </Select>
        </Stack>
      </ButtonFilter>
      <Pagination>
        <PaginationOutlined setPage={setPage} />
      </Pagination>
      <MainFilterProduct>
        <Filter>{filterWidthScreen()}</Filter>
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
                  quantidade={0}
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
    </Main>
  );
};
export default ProductPage;
