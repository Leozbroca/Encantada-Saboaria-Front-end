import axios from "axios";
import react, { useState } from "react";
import { Url } from "../../constants/Url";
import { useForm } from "../../hooks/useForm";
import { Main } from "./Styles";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useDisclosure,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { AiFillInstagram, AiTwotoneMail } from "react-icons/ai";

const Contact = () => {
  const { form, onChangeForm, clean } = useForm({
    name: "",
    email: "",
    text: "",
  });

  const [openModalAnwser, setOpenModalAnwser] = useState(false);
  const [messageAnswer, setMessageAnswer] = useState("");

  const sendData = async () => {
    await axios
      .post(`${Url}/contactSend`, form)
      .then((response) => {
        setOpenModalAnwser(true);
        setMessageAnswer(response.data.message);
        clean();
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  const onSubmitForm = () => {
    sendData();
  };

  function CompExample() {
    return openModalAnwser ? (
      <Alert status="success">
        <AlertIcon />
        <Box>
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>{messageAnswer}</AlertDescription>
        </Box>
        <CloseButton
          alignSelf="flex-start"
          position="relative"
          right={-1}
          top={-1}
          onClick={() => setOpenModalAnwser(false)}
        />
      </Alert>
    ) : (
      <></>
    );
  }

  return (
    <Main>
      <Container
        maxW="full"
        mt={0}
        centerContent
        overflow="hidden"
        marginTop={100}
      >
        <div>{CompExample()}</div>
        <Flex>
          <Box
            bg="#f3f3f3"
            color="black"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4} display={"flex"}>
              <Wrap
                spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}
                display={"flex"}
                justifyContent={"space-around"}
              >
                <WrapItem>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    width={"100%"}
                  >
                    <Heading>Contato</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Preencha os dados abaixo
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#000000"
                          _hover={{ border: "2px solid #efbae1" }}
                          leftIcon={<MdPhone color="#efbae1" size="20px" />}
                        >
                          Cel.:(21) 98342-3931
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#000000"
                          _hover={{ border: "2px solid #efbae1" }}
                          leftIcon={<MdEmail color="#efbae1" size="20px" />}
                        >
                          saboaria@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#000000"
                          _hover={{ border: "2px solid #efbae1" }}
                          leftIcon={
                            <MdLocationOn color="#efbae1" size="20px" />
                          }
                        >
                          Caçapava - São Paulo
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                    >
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#efbae1" }}
                        icon={<MdFacebook size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#efbae1" }}
                        icon={<AiFillInstagram size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#efbae1" }}
                        icon={<AiTwotoneMail size="28px" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Nome Usuario</FormLabel>
                          <InputGroup borderColor="#efbae1">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input
                              type="text"
                              size="md"
                              name={"name"}
                              value={form.name}
                              onChange={onChangeForm}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Email Usuario</FormLabel>
                          <InputGroup borderColor="#efbae1">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input
                              type="text"
                              size="md"
                              name={"email"}
                              value={form.email}
                              onChange={onChangeForm}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                            name={"text"}
                            value={form.text}
                            onChange={onChangeForm}
                          />
                        </FormControl>
                        <FormControl
                          id="name"
                          float="right"
                          textAlign={"center"}
                        >
                          <Button
                            onClick={onSubmitForm}
                            variant="solid"
                            bg="#0B0E3F"
                            color="white"
                            _hover={{ bg: "#efbae1" }}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Main>
  );
};

export default Contact;
