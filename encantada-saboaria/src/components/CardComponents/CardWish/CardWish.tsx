import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import ICartPurchase from "../../../interface/ICartPurchase";
import { formatPrice } from "../../../utils/formatPrice";
import { useNavigate } from "react-router-dom";
import { goTo } from "../../../routes/Coordinator";
import { DeleteIcon, SearchIcon } from "@chakra-ui/icons";
import { useGlobal } from "../../../Global/GlobalStateContext";
import {
  ButtonWish,
  MainCard,
  MaterialCardBody,
  MaterialStack,
} from "./Styles";

const CardWish = (wishProduct: ICartPurchase) => {
  const navigate = useNavigate();

  const { remove, wish, setWish } = useGlobal();

  return (
    <MainCard>
      <MaterialCardBody
      >
        <Image
          boxSize="200px"
          borderRadius="sm"
          margin={"10px"}
          src={wishProduct.foto}
          alt={wishProduct.descricao}
        />
        <MaterialStack spacing={6}>
          <Heading size="md">{wishProduct.nome}</Heading>
          <Heading as="h5" size="sm" color={"#c8c5c5"}>
            {wishProduct.descricao}
          </Heading>
          <Text color="blue.600" fontSize="2em">
            {formatPrice(Number(wishProduct.preco))}
          </Text>
        </MaterialStack>
      </MaterialCardBody>
      <CardFooter>
        <ButtonWish
          product={true}
          onClick={() => goTo(navigate, `/product/${wishProduct.id}`)}
        >
          <SearchIcon />
        </ButtonWish>
        <ButtonWish
          product={false}
          style={{ color: "white" }}
          onClick={() => remove(String(wishProduct.id), wish, setWish, "Wish")}
        >
          <DeleteIcon />
        </ButtonWish>
      </CardFooter>
    </MainCard>
  );
};
export default CardWish;
