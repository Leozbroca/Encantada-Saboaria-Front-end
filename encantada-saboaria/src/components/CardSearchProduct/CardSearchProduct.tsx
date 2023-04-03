import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { goTo } from "../../routes/Coordinator";
import { formatPrice } from "../CartProductCart/PrinceTag";

const CardSearchProduct = (product: any) => {
  const navigate = useNavigate();

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      width={"100%"}
      marginTop={"5px"}
      cursor={"pointer"}
      onClick={() => {
        goTo(navigate, `/produto/${product._id}`);
        product.onClose();
      }}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "100px" }}
        src={product.foto}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{product.nome}</Heading>

          <Text py="2">{formatPrice(product.preco)}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default CardSearchProduct;
