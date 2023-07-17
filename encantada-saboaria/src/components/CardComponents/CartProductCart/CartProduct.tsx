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
import { useNavigate } from "react-router-dom";
import { goTo } from "../../../routes/Coordinator";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import ICartPurchase from "../../../interface/ICartPurchase";
import ItotalCart from "../../../interface/ITotalCart";

const CartProduct = ({ total }: ItotalCart) => {
  const navigate = useNavigate();

  const productsCartStorage:ICartPurchase[] | null = JSON.parse(window.localStorage.getItem("products")!)

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
            {productsCartStorage && productsCartStorage.length > 0 ? (
              productsCartStorage.map((item: ICartPurchase) => (
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
              color={mode("#00033D", "#00033D")}
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
