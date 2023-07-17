import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import ICartPurchase from "../../../interface/ICartPurchase";
import {
  ModalMain,
  MainModalProduct,
  ProductPhoto,
  ProductButtonOptions,
  ButtonShopping,
  StrongQtdShops,
} from "./Styles";
import { formatPrice } from "../../../utils/formatPrice";
import { goTo } from "../../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../../Global/GlobalStateContext";
import { CheckIcon } from "@chakra-ui/icons";
import { IModalCart } from "../../../interface/IModalCart";

const ModalCart = ({ isOpen, onclose, product }: IModalCart) => {
  const { total , totalProductsCart} = useGlobal();

  const navigate = useNavigate();

  return (
    <ModalMain size={"xl"} onClose={onclose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          color={"green"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CheckIcon margin={"5px"} /> Produto adicionado no carrinho com
          sucesso !
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <MainModalProduct>
            <ProductPhoto>
              <img src={product.foto} />
              <p>{product.nome}</p>
              <p>{formatPrice(Number(product.preco))}</p>
            </ProductPhoto>

            <ProductButtonOptions>
              <p>
                Existe <StrongQtdShops>{total.length}</StrongQtdShops> item no
                seu carrinho
              </p>
              <p>Valor total compras: <StrongQtdShops>{formatPrice(Number(totalProductsCart))}</StrongQtdShops></p>
              <ButtonShopping onClick={() => goTo(navigate, "/produtos")}>
                Continue Comprando
              </ButtonShopping>
              <ButtonShopping onClick={() => goTo(navigate, "/carrinho")}>
                Ir para o carrinho
              </ButtonShopping>
              {/* <ButtonShopping>Comprar</ButtonShopping> */}
            </ProductButtonOptions>
          </MainModalProduct>
        </ModalBody>
        {/* <ModalFooter>
          <Button onClick={onclose}>Close</Button>
        </ModalFooter> */}
      </ModalContent>
    </ModalMain>
  );
};

export default ModalCart;
