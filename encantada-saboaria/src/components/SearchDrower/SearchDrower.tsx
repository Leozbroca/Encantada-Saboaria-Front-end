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
  MainDraweHeader,
  MainProductSeach,
  SearchInit,
  SearchNotFound,
} from "./Styles";
import { IProductDetail } from "../../pages/product/Product";
import CardSearchProduct from "../CardSearchProduct/CardSearchProduct";
import { AiOutlineCloseCircle } from "react-icons/ai";

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
    return <CardSearchProduct key={product._id} {...product} onClose={props.functionOpen.onClose} />;
  });

  return (
    <>
      <Drawer
        placement="top"
        onClose={props.functionOpen.onClose}
        isOpen={props.functionOpen.isOpen}
      >
        <DrawerOverlay bg="blackAlpha.700" />
        <DrawerContent minHeight={"40%"} display={"flex"} alignItems={"center"}>
          <MainDraweHeader>
            <DrawerHeader
              borderBottomWidth="1px"
              width={"100%"}
              textAlign={"center"}
            >
              Busque produtos
            </DrawerHeader>
            <IconButton
              aria-label="Search database"
              onClick={props.functionOpen.onClose}
              icon={<AiOutlineCloseCircle />}
            />
          </MainDraweHeader>
          <Input
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
