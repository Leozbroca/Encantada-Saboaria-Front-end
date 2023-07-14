import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import ICartPurchase from "../../../interface/ICartPurchase";
import {
  ModalMain,
  MainModalProduct,
  ProductPhoto,
  ProductButtonOptions,
  ButtonShopping,
} from "./Styles";
import { formatPrice } from "../../../utils/formatPrice";
import { goTo } from "../../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../../Global/GlobalStateContext";

interface IModalCart {
  isOpen: boolean;
  onclose: () => void;
  product: ICartPurchase;
}

const ModalCart = ({ isOpen, onclose, product }: IModalCart) => {
    const { total } = useGlobal();

    const navigate = useNavigate()

  return (
    <ModalMain size={"xl"} onClose={onclose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={"green"}>
          Producto Adicionado no carrinho com sucesso !
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
              <p>Existe {total.length} item no seu carrinho</p>
              <p>Total das compras : {formatPrice(Number(product.preco))}</p>
              <ButtonShopping onClick={() => goTo(navigate, "/produtos")}>Continue Comprando</ButtonShopping>
              <ButtonShopping onClick={() => goTo(navigate, "/carrinho")}>Ir para o carrinho</ButtonShopping>
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
