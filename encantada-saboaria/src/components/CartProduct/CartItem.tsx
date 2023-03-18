import {
  CloseButton,
  Flex,
  HStack,
  Link,
  Select,
  SelectProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CartProductMeta } from "./CartProductMeta";

type CartItemProps = {
  isGiftWrapping?: boolean;
  name: string;
  description: string;
  quantity: number;
  price: number;
  currency: string;
  imageUrl: string;
  total:Number[]
  setTotal: React.Dispatch<React.SetStateAction<Number[]>>
  onChangeQuantity?: (quantity: number) => void;
  onClickGiftWrapping?: () => void;
  onClickDelete?: () => void;
};

export function formatPrice(value: number) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
}

export const CartItem = (props: CartItemProps) => {
  const {
    isGiftWrapping,
    name,
    description,
    quantity,
    imageUrl,
    currency,
    total,
    setTotal,
    price,
    onClickDelete,
  } = props;

  const [quantidade, setQuantidade] = useState(1);

  const QuantitySelect = (props: SelectProps) => {
    return (
      <Select
        maxW="64px"
        focusBorderColor={useColorModeValue("blue.500", "blue.200")}
        onChange={(event) => setQuantidade(Number(event.target.value))}
      >
        <option value={"1"}>1</option>
        <option value={"2"}>2</option>
        <option value={"3"}>3</option>
        <option value={"4"}>4</option>
        <option value={"5"}>5</option>
      </Select>
    );
  };

  useEffect(() => {
    let totalCart;
    totalCart = quantidade * price
    setTotal([...total,totalCart]);
  }, [quantidade]);

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={name}
        description={description}
        image={imageUrl}
        isGiftWrapping={isGiftWrapping}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <QuantitySelect value={quantity} />
        <HStack spacing="1">
          <Text as="span" fontWeight="medium">
            {formatPrice(price * quantidade)}
          </Text>
        </HStack>

        <CloseButton
          aria-label={`Delete ${name} from cart`}
          onClick={onClickDelete}
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
        <Link fontSize="sm" textDecor="underline">
          Deletar
        </Link>
        <QuantitySelect value={quantity} />
        <HStack spacing="1">
          <Text as="span" fontWeight="medium">
            {formatPrice(price * quantidade)}
          </Text>
        </HStack>
      </Flex>
    </Flex>
  );
};
