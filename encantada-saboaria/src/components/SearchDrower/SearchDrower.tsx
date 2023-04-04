import { useEffect, useState } from "react";
import { useDisclosure, Input, IconButton } from "@chakra-ui/react";

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
import CardSearchProduct from "../CardSearchProduct/CardSearchProduct";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IProductDetail } from "../../pages/product/interface/IProductDetail";

const SearchDrower = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [errorBoolean, setErrorBoolean] = useState<boolean>(false);
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
          setError(error.response.data.message);
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
            <DrawerHeader
              borderBottomWidth="1px"
              width={"100%"}
              flexGrow={1}
              display={"flex"}
            >
              Buscar Produtos
            </DrawerHeader>
            <IconButton
              aria-label="Search database"
              onClick={props.functionOpen.onClose}
              icon={<AiOutlineCloseCircle />}
            />
          </MainDraweHeader>
          <Input
            size={"lg"}
            padding={"10px"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Procure o nome dos produtos"
          />
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
