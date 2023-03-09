import { Button, IconButton } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import { useState } from "react";
import { BiMailSend } from "react-icons/bi";
import CardProduto from "../../components/CardProduto/CardProduto";
import { ICategory } from "../../components/footer/Footer";
import ModalFilter from "../../components/modalFilter/modalFilter";
import { Url } from "../../constants/Url";
import useRequestData from "../../hooks/useRequestData";
import { IProducts } from "../homepage/Homepage";
import {
  Filter,
  Main,
  Pagination,
  ProductsScreen,
  SpanPagination,
  ProductNotFound
} from "./Styles";
export interface IFilter {
  nome: string;
  _id: string;
}
const ProductPage = () => {
  const [page, setPage] = useState(1);
  const [filterEssence, setFilterEssence] = useState<IFilter>({
    nome: "",
    _id: "",
  });
  const { isOpen, onToggle } = useDisclosure();

  const products: IProducts[] = useRequestData(
    [],
    `${Url}/products?page=${page}`
  );

  const [clickPage, setClickPage] = useState(false);

  const productsList = products.filter((product: IProducts) =>
    filterEssence.nome ? product.categoria_id === filterEssence._id : true
  );

  const onClickPage = (numero: number) => {
    setPage(numero);
    setClickPage(!clickPage);
  };

  console.log("filterEssence", filterEssence);

  return (
    <>
      <Main>
        <Button onClick={onToggle}>Filtro</Button>
        <Filter>
          <ModalFilter isOpen={isOpen} setFilterEssence={setFilterEssence} />
        </Filter>
        <ProductsScreen>
          {productsList.length > 0 ? (
            productsList.map((product: IProducts) => {
              return (
                <CardProduto
                  key={product.id}
                  nome={product.nome}
                  foto={product.foto}
                  preco={product.preco}
                />
              );
            })
          ) : (
            <ProductNotFound>
              <p>Não há produtos com essa categoria</p>
            </ProductNotFound>
          )}
        </ProductsScreen>
      </Main>
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
    </>
  );
};
export default ProductPage;
