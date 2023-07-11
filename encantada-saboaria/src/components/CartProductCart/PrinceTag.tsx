import { HStack, Text, useColorModeValue as mode } from "@chakra-ui/react";
import { ReactNode } from "react";
import IPriceTagProps from "../../interface/IPriceTags";
import { formatPrice } from "../../utils/formatPrice";

export type FormatPriceOptions = { locale?: string; currency?: string };


export const PriceTag = (props: IPriceTagProps) => {
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
