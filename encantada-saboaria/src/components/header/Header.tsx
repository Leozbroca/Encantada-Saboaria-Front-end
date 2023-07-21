import React, { useEffect } from "react";
import {
  MainHeader,
  MenuLogo,
  MenuItens,
  MenuItem,
  MenuItemFlex,
  MainIcons,
} from "./Styles";
import logoTipo from "../../assets/logotipo.png";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { goTo } from "../../routes/Coordinator";
import {
  useDisclosure,
  Flex,
  IconButton,
  Collapse,
  useColorModeValue,
  Stack,
  Button,
} from "@chakra-ui/react";

import SearchDrower from "../SearchDrower/SearchDrower";
import { useGlobal } from "../../Global/GlobalStateContext";
import CardCarrinhoHeader from "../CardComponents/CardCarrinhoHeader/CardCarrinhoHeader";
import ModalLogin from "../ModalComponents/ModalLogin/ModalLogin";
import ModalRegister from "../ModalComponents/ModalRegister/ModalRegister";
import ModalForgot from "../ModalComponents/ModalForgot/ModalForgot";
import { MobileNav, DesktopNav } from "./MenuComponent/menuComponent";
import ModalCartComponent from "../ModalComponents/modalCartComponent/modalCartComponent";
import IconButtonComponent from "./IconButton";

const Header = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const functionOpen = useDisclosure();
  const btnRef: any = React.useRef();
  const {
    total,
    loginOpen,
    forgotOpen,
    registerOpen,
    hamburguerOpen,
    totalProductsCart,
    setTotalProductsCart,
  } = useGlobal();

  const cartProducts =
    total &&
    total.map((product: any) => {
      return (
        <CardCarrinhoHeader
          key={product.id}
          id={product.id}
          nome={product.nome}
          descricao={product.descricao}
          foto={product.foto}
          preco={product.preco}
          quantidade={product.quantidade}
        />
      );
    });

  useEffect(() => {
    let totalCartReduce;
    totalCartReduce = total.reduce((item, current) => item + current.total, 0);
    setTotalProductsCart(totalCartReduce);
  }, [setTotalProductsCart, total]);

  return (
    <>
      <MainHeader>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          width={"100%"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButtonComponent hamburguerOpen={hamburguerOpen} />
          </Flex>
          <Flex
            marginLeft={"10%"}
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
          >
            <MenuLogo src={logoTipo} />
            <Flex
              alignItems={"center"}
              display={{ base: "none", md: "flex" }}
              ml={10}
            >
              <DesktopNav />
            </Flex>
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={2}
          >
            <IconContext.Provider
              value={{ className: "global-class-name", size: "2em" }}
            >
              <MenuItem onClick={functionOpen.onOpen}>
                <HiOutlineMagnifyingGlass />
              </MenuItem>
            </IconContext.Provider>

            <IconContext.Provider
              value={{ className: "global-class-name", size: "2em" }}
            >
              <MenuItemFlex onClick={loginOpen.onOpen}>
                <HiOutlineUser />
              </MenuItemFlex>
            </IconContext.Provider>

            <IconContext.Provider
              value={{ className: "global-class-name", size: "2em" }}
            >
              <MenuItemFlex onClick={() => goTo(navigate, `/desejo`)}>
                <HiOutlineHeart />
              </MenuItemFlex>
            </IconContext.Provider>

            <IconContext.Provider
              value={{ className: "global-class-name", size: "2em" }}
            >
              <MenuItem onClick={onOpen} ref={btnRef}>
                <HiOutlineShoppingBag />
              </MenuItem>
            </IconContext.Provider>
          </Stack>
        </Flex>

        <Collapse in={hamburguerOpen.isOpen} animateOpacity>
          <MobileNav hamburguerOpen={hamburguerOpen} />
        </Collapse>

        <SearchDrower functionOpen={functionOpen} />
        <ModalLogin
          loginOpen={loginOpen}
          forgotOpen={forgotOpen}
          registerOpen={registerOpen}
        />
        <ModalForgot forgotOpen={forgotOpen} loginOpen={loginOpen} />
        <ModalRegister registerOpen={registerOpen} loginOpen={loginOpen} />
        <ModalCartComponent
          isOpen={isOpen}
          onClose={onClose}
          btnRef={btnRef}
          cartProducts={cartProducts}
          total={total}
          totalProductsCart={totalProductsCart}
        />
      </MainHeader>
    </>
  );
};

export default Header;
