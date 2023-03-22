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

const Header = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef:any = React.useRef()

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
      
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          colorScheme="pink"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Carrinho</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Voltar
              </Button>
              <Button colorScheme='blue'>Finalizar Compra</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

    </MainHeader>
  );
};

export default Header;
