import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  ButtonLeft,
  ButtonRight,
  Buttons,
  CartBody,
  CartBottom,
  CartInsideTop,
  CartTop,
  CartTopNumber,
  EmptyCartP,
  Total,
} from "./Styled";
import { goTo } from "../../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import ICartPurchase from "../../../interface/ICartPurchase";

interface IModalCartComponent {
  isOpen:boolean;
  onClose: () => void;
  btnRef:any;
  cartProducts: JSX.Element[];
  total: ICartPurchase[];
  totalProductsCart: number;
}

const ModalCartComponent = ({
  isOpen,
  onClose,
  btnRef,
  cartProducts,
  total,
  totalProductsCart,
}: IModalCartComponent) => {
  const navigate = useNavigate();

  return (
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
                <p style={{ color: "#00033D" }}>R${totalProductsCart}</p>
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
  );
};

export default ModalCartComponent;
