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

export interface CartPurchase {
  id: string | undefined;
  total: number| undefined;
}
export interface CartShip {
  id: string;
  price: number;
}

const CartProduct = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState<CartPurchase[]>([]);
  const [totalCart, setTotalCart] = useState(0);

  /**
 * @author Gabriel Mina - Essa função ainda falta terminar , os itens não estão alterando 
 */
  const addToCart = (item: CartPurchase) => {
    console.log("CHAMOU", item);
    const productCart = total.find(
      (product: CartPurchase) => product.id === item.id
    );

    let incrementQuantity;
    if (productCart) {
      incrementQuantity = total.map((product: CartPurchase) => {
        if (product.id === item.id) {
          return {
            ...product,
          };
        }
        return product;
      });
      setTotal(incrementQuantity);
    } else {
      if (cartData) {
        const addProduct = cartData.find((product: Cart) => {
          if (product.id === item.id) {
            return {
              id: product.id,
              price: product.price,
            };
          }
        });

        const objeto:CartPurchase = {
          id:addProduct?.id,
          total:item.total
        }

        const newProduct = [...total, objeto];
        setTotal(newProduct);
      }

    }
  };

  console.log("TOTAL",total)

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
            Itens no Carrinho ({cartData.length} items)
          </Heading>

          <Stack spacing="6">
            {cartData.length > 0 ? (
              cartData.map((item: Cart) => (
                <CartItem
                  key={item.id}
                  {...item}
                  total={total}
                  setTotal={setTotal}
                  addToCart={addToCart}
                />
              ))
            ) : (
              <p>Nenhum item no carrinho</p>
            )}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary total={totalCart} />
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
