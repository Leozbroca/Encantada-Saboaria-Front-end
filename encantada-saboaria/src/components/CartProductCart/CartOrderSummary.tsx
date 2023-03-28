import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { urlMercadoPago } from "../../constants/Url";
import { useGlobal } from "../../Global/GlobalStateContext";
import { goTo } from "../../routes/Coordinator";
import { formatPrice } from "./CartItem";

type OrderSummaryItemProps = {
  label: string;
  value?: string;
  children?: React.ReactNode;
};

const OrderSummaryItem = (props: OrderSummaryItemProps) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = (props: any) => {
  const { total } = useGlobal();
  const [totalCart, setTotalCart] = useState(0);

  const navigate = useNavigate()

  useEffect(() => {
    let totalCartReduce;
    totalCartReduce = total.reduce((item, current) => item + current.total, 0);
    setTotalCart(totalCartReduce);
  }, [total]);


  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Total do Pedido</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={formatPrice(totalCart)} />
        <OrderSummaryItem label="Calculo do frete">
          <Link href="#" textDecor="underline">
            Frete
          </Link>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(totalCart)}
          </Text>
        </Flex>
      </Stack>
      <Button
        colorScheme="blue"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
        onClick={() => goTo(navigate,"/compras")}
      >
        Comprar
      </Button>
    </Stack>
  );
};
