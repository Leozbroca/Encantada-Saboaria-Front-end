import { useEffect, useState } from "react";
import {
  useDisclosure,
  Input,
  IconButton,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { Url } from "../../constants/Url";
import axios from "axios";
import {
  InputSearch,
  MainDraweHeader,
  MainProductSeach,
  SearchInit,
  SearchNotFound,
} from "./Styles";
import CardSearchProduct from "../CardComponents/CardSearchProduct/CardSearchProduct";
import IProductDetail from "../../interface/IProductDetail";
import { CloseIcon, Search2Icon } from "@chakra-ui/icons";

const SearchDrower = (props: any) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [errorBoolean, setErrorBoolean] = useState(false);
  const [productDetail, setProductDetail] = useState<IProductDetail[]>([
    {
      _id: "",
      nome: "",
      foto: "",
      preco: 0,
      descricao: "",
      quantidade: 0,
      tamanho: "",
      categoria_id: "",
      essencia_id: "",
    },
  ]);

  useEffect(() => {
    axios
      .get(`${Url}/produtosNome?nome=${name}`)
      .then((response) => {
        setProductDetail(response.data);
        setErrorBoolean(false);
      })
      .catch((error) => {
        if (error.response.data.message) {
          setError("Produto não encontrado");
          setErrorBoolean(true);
        }
      });
  }, [name]);

  const productSearchScreen = productDetail.map((product) => {
    return (
      <CardSearchProduct
        key={product._id}
        {...product}
        onClose={props.functionOpen.onClose}
      />
    );
  });

  return (
    <>
      <Drawer
        placement="top"
        onClose={props.functionOpen.onClose}
        isOpen={props.functionOpen.isOpen}
      >
        <DrawerOverlay />
        <DrawerContent
          minHeight={"40%"}
          display={"flex"}
          alignItems={"center"}
          padding={"10px"}
        >
          <MainDraweHeader>
            <DrawerHeader flexGrow={1} display={"flex"} fontSize={"2em"}>
              Buscar Produtos
            </DrawerHeader>
            <IconButton
              aria-label="Search database"
              onClick={props.functionOpen.onClose}
              icon={<CloseIcon />}
            />
          </MainDraweHeader>
          <InputGroup width={"60%"}>
            <Input
              variant="flushed"
              size={"lg"}
              padding={"10px"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Procure produtos"
            />
            <InputRightElement>
              <Search2Icon color="gray.500" margin={"5px"} />
            </InputRightElement>
          </InputGroup>

          <MainProductSeach>
            {productDetail.length > 0 && errorBoolean === false ? (
              productSearchScreen
            ) : errorBoolean === true ? (
              <SearchNotFound>{error}</SearchNotFound>
            ) : (
              <SearchInit>Busque o nome dos produtos</SearchInit>
            )}
          </MainProductSeach>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SearchDrower;
