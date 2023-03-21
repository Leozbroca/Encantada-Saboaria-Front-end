import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Url } from "../../constants/Url";

import logo from "../../assets/logo1.png";
import { useNavigate } from "react-router-dom";
import { goTo } from "../../routes/Coordinator";
import { BurnImg } from "./Styles";

export interface ICategory {
  nome: string;
  _id: string;
}

const Footer = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const getCategories = async () => {
    await axios
      .get(`${Url}/allCateories`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  const renderCategory = categories.map((category, index) => {
    return (
      <Link _hover={{ color: " #efbae1" }} key={category._id} href={"#"}>
        {category.nome}
      </Link>
    );
  });

  const Logo = () => {
    return <BurnImg src={logo} alt={"Imagem de logo"} />;
  };

  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        rounded={"full"}
        w={8}
        h={8}
        cursor={"pointer"}
        as={"a"}
        href={href}
        target={"_blank"}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };

  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
        {children}
      </Text>
    );
  };
  const navigate = useNavigate();

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"8xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr ", md: "2fr 1.5fr 1.5fr 1.5fr 2fr" }}
          spacing={9}
        >
          <Stack spacing={6}>
            <Box>
              <Logo />
            </Box>
            <Text fontSize={"sm"}>
              © Copyright 2023 | Saboaria Encantada By Desenvolvedores Saboaria
              Encantada.
            </Text>
            <Stack direction={"row"} spacing={6}>
              {/* <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton> */}
              <SocialButton
                label={"Instagram"}
                href={"https://www.instagram.com/encantada_saboaria/"}
              >
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Ajuda e Informações</ListHeader>
            <Link _hover={{ color: " #efbae1" }} onClick={()=>goTo(navigate,"/sobre")}>Sobre nos</Link>
            <Link _hover={{ color: " #efbae1" }} href={"#"}>
              Politica de privacidade
            </Link>
            <Link _hover={{ color: " #efbae1" }} href={"#"}>
              Termos de condições
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Busca rapida de Produtos</ListHeader>
            <Link _hover={{ color: " #efbae1" }} onClick={()=>goTo(navigate,"/produtos")}>Produtos</Link>
            <Link
              _hover={{ color: " #efbae1" }}
              onClick={() => goTo(navigate, "/contato")}
            >
              Contato
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Categorias</ListHeader>
            {renderCategory}
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Cadastre o seu email para receber novidades sobre nossos produtos</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Seu endereço de email"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("green.400", "green.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "green.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
