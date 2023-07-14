import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ButtonWish, MainCard } from "./Styles";
import ICartPurchase from "../../../interface/ICartPurchase";
import { formatPrice } from "../../../utils/formatPrice";
import { useNavigate } from "react-router-dom";
import { goTo } from "../../../routes/Coordinator";
import { DeleteIcon, SearchIcon } from "@chakra-ui/icons";
import { useGlobal } from "../../../Global/GlobalStateContext";

const CardWish = (wishProduct: ICartPurchase) => {
  const navigate = useNavigate();

  const { remove, wish, setWish } = useGlobal();

  return (
    <MainCard>
      <CardBody width={"100%"} display={"flex"} flexDirection={"row"}>
        <Image
          boxSize="100px"
          src={wishProduct.foto}
          alt={wishProduct.descricao}
          borderRadius="sm"
          margin={"10px"}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{wishProduct.nome}</Heading>
          <Text>{wishProduct.descricao}</Text>
          <Text color="blue.600" fontSize="2xl">
            {formatPrice(Number(wishProduct.preco))}
          </Text>
        </Stack>
      </CardBody>
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
