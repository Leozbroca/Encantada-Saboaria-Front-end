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
import { CartPurchase } from "../../Global/GlobalState";
import { useGlobal } from "../../Global/GlobalStateContext";
import { CartProductMeta } from "./CartProductMeta";

export function formatPrice(value: number) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
}

export const CartItem = (props: CartPurchase) => {
  const { id, nome, descricao, foto, preco } = props;
  const { addToCart, removeToCart } = useGlobal();
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
    const objetoCart: CartPurchase = {
      id: id,
      total: totalCart,
      nome,
      descricao,
      foto,
      preco,
      quantidade
    };
    addToCart(objetoCart);
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
          onClick={() => removeToCart(String(id))}
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
        <Link
          fontSize="sm"
          textDecor="underline"
          onClick={() => removeToCart(String(id))}
        >
          Deletar
        </Link>
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
