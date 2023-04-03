import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { ImageDetail, Star } from "./Styles";
import BasicRating from "../StarRate/Star";
import { CartPurchase } from "../../Global/GlobalState";
import { useGlobal } from "../../Global/GlobalStateContext";
import { IProductDetail } from "../../pages/product/interface/IProductDetail";
import { Iingredients } from "../../pages/product/interface/IIngredients";

interface IProdcutDetail {
  productDetail: IProductDetail | undefined;
  ingredients: Iingredients[];
}

export default function ProductDetail({
  productDetail,
  ingredients,
}: IProdcutDetail) {
  const { addToCart } = useGlobal();

  const objetoCart: CartPurchase = {
    id: productDetail?._id,
    total: Number(productDetail?.preco),
    nome: productDetail?.nome,
    descricao: productDetail?.descricao,
    foto: productDetail?.foto,
    preco: productDetail?.preco,
    quantidade: productDetail?.quantidade
  };

  const ingredientsScreen = ingredients.map((ingredient, index) => {
    return (
      <>
        <List spacing={2}>
          <ListItem>{ingredient.nome}</ListItem>
        </List>
      </>
    );
  });

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex display={"flex"} flexDirection={"column"}>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={productDetail?.foto}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
          <ImageDetail>
            <Image
              boxSize={"200px"}
              alt={"product image"}
              src={productDetail?.foto}
              fit={"cover"}
              align={"center"}
              w={"23%"}
            />
            <Image
              boxSize={"200px"}
              alt={"product image"}
              src={productDetail?.foto}
              fit={"cover"}
              align={"center"}
              w={"23%"}
            />
            <Image
              boxSize={"200px"}
              alt={"product image"}
              src={productDetail?.foto}
              fit={"cover"}
              align={"center"}
              w={"23%"}
            />
            <Image
              boxSize={"200px"}
              alt={"product image"}
              src={productDetail?.foto}
              fit={"cover"}
              align={"center"}
              w={"23%"}
            />
          </ImageDetail>
        </Flex>
        <Stack spacing={{ base: 6, md: 6 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {productDetail?.nome}
            </Heading>
            <Text
              letterSpacing={"normal"}
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(productDetail?.preco))}
            </Text>
          </Box>

          <Star>
            <BasicRating />
          </Star>

          <Stack
            spacing={{ base: 4, sm: 2 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {productDetail?.descricao}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Ingredientes
              </Text>

              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacing={3}
                color={useColorModeValue("gray.500", "gray.400")}
              >
                {ingredientsScreen}
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Detalhes do produto
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Tamanho:
                  </Text>{" "}
                  {productDetail?.tamanho}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            onClick={() => addToCart(objetoCart)}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
              background: "#efbae1",
            }}
          >
            Adicionar no Carrinho
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>Entrega a delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
