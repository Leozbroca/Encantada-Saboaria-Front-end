import React from "react";
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
} from '@chakra-ui/react'
import SearchDrower from "../SearchDrower/SearchDrower";
import { useGlobal } from "../../Global/GlobalStateContext";
import CardCarrinhoHeader from "../CardCarrinhoHeader/CardCarrinhoHeader";
import { IProducts } from "../../pages/homepage/Homepage";

const Header = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef:any = React.useRef()
  const { total } = useGlobal();

  const cartProducts = total && total.map((product:any) => {
    return(<CardCarrinhoHeader
    key={product.id}
            id={product.id}
            nome={product.nome}
            descricao={product.descricao}
            foto={product.foto}
            preco={product.preco}
    />)
  })

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
      <SearchDrower/>
      <MenuItens>
        <IconContext.Provider
          value={{ className: "global-class-name", size: "2em" }}
        >
          <MenuItem>
            <HiOutlineMagnifyingGlass />
          </MenuItem>
        </IconContext.Provider>

        <IconContext.Provider
          value={{ className: "global-class-name", size: "2em" }}
        >
          <MenuItemFlex>
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

      <Drawer
          size="sm"
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent sx={{backgroundColor:"#f8f9fa"}}>
            <DrawerCloseButton sx={{left: 0, marginLeft:"10px", marginRight:"10px", color:"black"}}/>
            <CartTop>
                <CartInsideTop><p>Carrinho de compras</p></CartInsideTop>
                <CartTopNumber>{total.length}</CartTopNumber>
            </CartTop>
            <CartBody>
              {cartProducts}
            </CartBody>
            <CartBottom>
                <Total>
                  <p>Total:</p>
                  <p style={{color:"pink"}}>R$20,00</p>
                </Total>
                <Buttons>
                  <ButtonLeft>Ver Carrinho</ButtonLeft>
                  <ButtonRight>Finalizar compra</ButtonRight>
                </Buttons>
            </CartBottom>
          </DrawerContent>
        </Drawer>

    </MainHeader>
  );
};

export default Header;
