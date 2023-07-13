import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import react from "react";
import IWish from "../../interface/IWish";
import ICartPurchase from "../../interface/ICartPurchase";
import { formatPrice } from "../../utils/formatPrice";
import { ButtonWish } from "./Styles";
import { useNavigate } from "react-router-dom";
import { goTo } from "../../routes/Coordinator";

const CardWish = (wishProduct: ICartPurchase) => {
  console.log("PROSP", wishProduct);
  const navigate = useNavigate();
  return (
    <Card maxW="sm" margin={"10"}>
      <CardBody>
        <Image
          src={wishProduct.foto}
          alt={wishProduct.descricao}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{wishProduct.nome}</Heading>
          <Text>{wishProduct.descricao}</Text>
          <Text color="blue.600" fontSize="2xl">
            {formatPrice(Number(wishProduct.preco))}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonWish
          className="NewArrivals"
          style={{ backgroundColor: "#efbae1", color: "white" }}
          onClick={() => goTo(navigate, `/product/${wishProduct.id}`)}
        >
          Página do produto
        </ButtonWish>
      </CardFooter>
    </Card>
  );
};
export default CardWish;
