import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Image,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import { IForm3 } from "./Interfaces/IForm3";
import { methodsPayments } from "./MethodPayments";
import { ConfirmPurchase } from "./Styled";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function DetailPayment({ fullAdress, methodPayment }: IForm3) {

  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"Detalhes do Pagamento"}
          text={`Você escolheu o metódo de pagamento ${methodPayment}`}
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"Detalhes da Entrega"}
          text={`${fullAdress?.logradouro} , ${fullAdress?.numero} . ${fullAdress?.localidade} - ${fullAdress?.uf} CEP :${fullAdress?.cep}`}
        />
      </SimpleGrid>
    </Box>
  );
}
