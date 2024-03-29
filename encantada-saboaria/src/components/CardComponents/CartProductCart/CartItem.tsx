import {
  CloseButton,
  Flex,
  HStack,
  Link,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useGlobal } from "../../../Global/GlobalStateContext";
import { CartProductMeta } from "./CartProductMeta";
import ICartPurchase from "../../../interface/ICartPurchase";
import { formatPrice } from "../../../utils/formatPrice";
import { ButtonWish } from "../CardWish/Styles";
import { DeleteIcon } from "@chakra-ui/icons";

export const CartItem = (props: ICartPurchase) => {
  const { id, nome, descricao, foto, preco } = props;
  const { remove, total, setTotal, addTo, wish, setWish } = useGlobal();

  const [quantidade, setQuantidade] = useState(1);

  const QuantitySelect = () => {
    return (
      <Select
        maxW="64px"
        focusBorderColor={useColorModeValue("blue.500", "blue.200")}
        value={quantidade}
        onChange={(event) => setQuantidade(Number(event.target.value))}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </Select>
    );
  };

  useEffect(() => {
    let totalCart;
    totalCart = quantidade * Number(preco);
    const objetoCart: ICartPurchase = {
      id: id,
      total: totalCart,
      nome,
      descricao,
      foto,
      preco,
      quantidade,
    };
    addTo(total, objetoCart, setTotal, "products");
  }, [quantidade]);

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={nome ? nome : ""}
        description={descricao ? descricao : ""}
        image={foto ? foto : ""}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <QuantitySelect />
        <HStack spacing="1">
          <Text as="span" fontWeight="medium">
            {formatPrice(Number(preco) * quantidade)}
          </Text>
        </HStack>

        <CloseButton
          aria-label={`Delete ${nome} from cart`}
          onClick={() => remove(String(id), total, setTotal, "products")}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <ButtonWish
          product={true}
          style={{ color: "white" }}
          onClick={() => remove(String(id), total, setTotal, "products")}
        >
          <DeleteIcon />
        </ButtonWish>

        <QuantitySelect />
        <HStack spacing="1">
          <Text as="span" fontWeight="medium">
            {formatPrice(Number(preco) * quantidade)}
          </Text>
        </HStack>
      </Flex>
    </Flex>
  );
};
