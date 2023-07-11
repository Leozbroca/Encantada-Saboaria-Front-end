import {
  StackProps,
  TextProps,
  useColorModeValue as mode,
} from "@chakra-ui/react";

interface IPriceTagProps {
  quantidade: number;
  currency: string;
  price: number;
  salePrice?: number;
  rootProps?: StackProps;
  priceProps?: TextProps;
  salePriceProps?: TextProps;
}
export default IPriceTagProps;
