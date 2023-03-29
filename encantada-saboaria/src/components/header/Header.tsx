import React, { useState, useEffect } from "react";
import {
  MainHeader,
  MenuButton,
  MenuLogo,
  MenuOptions,
  Option,
  MenuItens,
  MenuItem,
  MenuItemFlex,
  CartTop,
  CartInsideTop,
  CartTopNumber,
  CartBottom,
  Total,
  Buttons,
  ButtonLeft,
  ButtonRight,
  CartBody,
  EmptyCartP,
} from "./Styles";
import logo2 from "../../assets/logo2.png";
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
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import SearchDrower from "../SearchDrower/SearchDrower";
import { useGlobal } from "../../Global/GlobalStateContext";
import CardCarrinhoHeader from "../CardCarrinhoHeader/CardCarrinhoHeader";
import { IProducts } from "../../pages/homepage/Homepage";
import { CartPurchase } from "../../Global/GlobalState";
import ModalLogin from "../ModalLogin/ModalLogin";
import ModalRegister from "../ModalRegister/ModalRegister";
import ModalForgot from "../ModalForgot/ModalForgot";

const Header = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const functionOpen = useDisclosure();
  const btnRef: any = React.useRef();
  const { total, loginOpen, forgotOpen, registerOpen } = useGlobal();
  const [totalCart, setTotalCart] = useState(0);

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
    setTotalCart(totalCartReduce);
  }, [total]);

  return (
    <MainHeader>
      <MenuButton />
      <MenuLogo src={logo2} />
      <MenuOptions>
        <Option>
          <span />
          <p onClick={() => goTo(navigate, "/")}>Home</p>
        </Option>
        <Option>
          <span />
          <p onClick={() => goTo(navigate, "/produtos")}>Produtos</p>
        </Option>
        <Option>
          <span />
          <p onClick={() => goTo(navigate, "/carrinho")}>Carrinho</p>
        </Option>
        <Option>
          <span />
          <p onClick={() => goTo(navigate, "/sobre")}>Sobre</p>
        </Option>
        <Option>
          <span />
          <p onClick={() => goTo(navigate, "/contato")}>Contato</p>
        </Option>
      </MenuOptions>
      <SearchDrower functionOpen={functionOpen} />
      <MenuItens>
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
          <MenuItemFlex>
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

        {/* <MenuItem><HiOutlineMagnifyingGlass/></MenuItem> */}
        {/* <MenuItem><HiOutlineUser/></MenuItem>
                <MenuItem><HiOutlineHeart/></MenuItem>
                <MenuItem><HiOutlineShoppingBag/></MenuItem> */}
      </MenuItens>
      <ModalLogin
        loginOpen={loginOpen}
        forgotOpen={forgotOpen}
        registerOpen={registerOpen}
      />
      <ModalForgot forgotOpen={forgotOpen} loginOpen={loginOpen} />
      <ModalRegister registerOpen={registerOpen} loginOpen={loginOpen} />
      <Drawer
        size="sm"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay bg="blackAlpha.700" />
        <DrawerContent sx={{ backgroundColor: "#f8f9fa" }}>
          <DrawerCloseButton
            sx={{
              left: 0,
              marginLeft: "10px",
              marginRight: "10px",
              color: "black",
            }}
          />
          <CartTop>
            <CartInsideTop>
              <p>Carrinho de compras</p>
            </CartInsideTop>
            <CartTopNumber>{total.length}</CartTopNumber>
          </CartTop>
          {cartProducts.length > 0 ? (
            <>
              <CartBody>{cartProducts}</CartBody>
              <CartBottom>
                <Total>
                  <p>Total:</p>
                  <p style={{ color: "pink" }}>R${totalCart}</p>
                </Total>
                <Buttons>
                  <ButtonLeft
                    onClick={() => {
                      goTo(navigate, "/carrinho");
                      onClose();
                    }}
                  >
                    Ver Carrinho
                  </ButtonLeft>
                  <ButtonRight
                    onClick={() => {
                      goTo(navigate, "/compras");
                      onClose();
                    }}
                  >
                    Finalizar compra
                  </ButtonRight>
                </Buttons>
              </CartBottom>
            </>
          ) : (
            <EmptyCartP>Nenhum produto no carrinho.</EmptyCartP>
          )}
        </DrawerContent>
      </Drawer>
    </MainHeader>
  );
};

export default Header;
