import {
  HStack,
  StackProps,
  Text,
  TextProps,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface PriceTagProps {
  quantidade: number;
  currency: string;
  price: number;
  salePrice?: number;
  rootProps?: StackProps;
  priceProps?: TextProps;
  salePriceProps?: TextProps;
}

export type FormatPriceOptions = { locale?: string; currency?: string };

export function formatPrice(value: number) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
}

export const PriceTag = (props: PriceTagProps) => {
  const {
    quantidade,
    price,
    salePrice,
    rootProps,
    priceProps,
    salePriceProps,
  } = props;
  return (
    <HStack spacing="1" {...rootProps}>
      <Price>{formatPrice(price * quantidade)}</Price>
    </HStack>
  );
};

interface PriceProps {
  children?: ReactNode;
}

const Price = (props: PriceProps) => {
  const { children } = props;
  return (
    <Text as="span" fontWeight="medium">
      {children}
    </Text>
  );
};


