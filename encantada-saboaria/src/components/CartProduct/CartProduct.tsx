import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Select,
  SelectProps,
  Stack,
  useColorModeValue as mode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartPurchase } from "../../Global/GlobalState";
import { goTo } from "../../routes/Coordinator";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import { cartData } from "./data";

interface Cart {
  id: string;
  price: number;
  currency: string;
  name: string;
  description: string;
  quantity: number;
  imageUrl: string;
}

interface ItotalCart {
  total: CartPurchase[];
}

const CartProduct = ({ total }: ItotalCart) => {
  const navigate = useNavigate();

  return (
    <Box
      maxW={{ base: "3xl", lg: "7xl" }}
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        align={{ lg: "flex-start" }}
        spacing={{ base: "8", md: "16" }}
      >
        <Stack spacing={{ base: "8", md: "10" }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            Itens no Carrinho ({total.length} items)
          </Heading>

          <Stack spacing="6">
            {total.length > 0 ? (
              total.map((item: CartPurchase) => (
                <CartItem key={item.id} {...item} />
              ))
            ) : (
              <p>Nenhum item no carrinho</p>
            )}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />
          <HStack mt="6" fontWeight="semibold">
            <p>ou</p>
            <Link
              color={mode("blue.500", "blue.200")}
              onClick={() => goTo(navigate, "/produtos")}
            >
              Continue comprando
            </Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default CartProduct;
