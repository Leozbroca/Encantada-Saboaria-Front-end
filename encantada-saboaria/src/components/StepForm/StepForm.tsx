import React, { useEffect, useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { states } from "./BrasilStates";
import { useForm } from "../../hooks/useForm";

interface IForm1 {
  form: any;
  onChangeForm: (event: any) => void;
  setNumberCep: React.Dispatch<React.SetStateAction<string>>;
  numberCep: string;
  invalidCep: boolean;
  setCep: React.Dispatch<React.SetStateAction<string>>;
  cep: string;
}
interface IAdressCep {
  bairro: string | undefined;
  cep: string | undefined;
  complemento: string | undefined;
  localidade: string | undefined;
  logradouro: string | undefined;
  uf: string | undefined;
}

interface IFullAdress extends IAdressCep {
  numero: number | undefined;
}

const Form1 = ({
  form,
  onChangeForm,
  setNumberCep,
  numberCep,
  invalidCep,
  setCep,
  cep,
}: IForm1) => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Confirmar endereço
      </Heading>

      <FormControl width={"20%"}>
        <FormLabel htmlFor="cep" fontWeight={"normal"}>
          CEP
        </FormLabel>
        <Input
          isInvalid={invalidCep}
          id="cep"
          type="text"
          maxLength={8}
          pattern="[0-9]+$"
          name="cep"
          value={cep}
          onChange={(event) => setCep(event.target.value)}
          required
        />
        <FormHelperText color={"red"}>
          {invalidCep ? "Erro ao achar o cep" : ""}
        </FormHelperText>
      </FormControl>

      <Flex>
        <FormControl mr="5%">
          <FormLabel fontWeight={"normal"}>Endereço:</FormLabel>
          <Input
            id="logradouro"
            placeholder="Endereço"
            name="logradouro"
            type={"text"}
            value={form.logradouro}
            onChange={onChangeForm}
          />
        </FormControl>

        <FormControl mr="5%">
          <FormLabel fontWeight={"normal"}>Número:</FormLabel>
          <Input
            id="numero"
            placeholder="Digite o numero"
            type={"number"}
            value={numberCep}
            onChange={(e) => setNumberCep(e.target.value)}
          />
        </FormControl>
      </Flex>
      <br />
      <Flex>
        <FormControl mr="5%">
          <FormLabel fontWeight={"normal"}>Complemento:</FormLabel>
          <Input
            id="complemento"
            name="complemento"
            placeholder="Complemento"
            type={"text"}
            value={form.complemento}
            onChange={onChangeForm}
          />
        </FormControl>

        <FormControl mr="5%">
          <FormLabel fontWeight={"normal"}>Bairro:</FormLabel>
          <Input
            id="bairro"
            placeholder="Bairro"
            type={"text"}
            name="bairro"
            value={form.bairro}
            onChange={onChangeForm}
          />
        </FormControl>
      </Flex>
      <br />
      <Flex>
        <FormControl mr="5%">
          <FormLabel fontWeight={"normal"}>Cidade:</FormLabel>
          <Input
            id="localidade"
            placeholder="Cidade"
            type={"text"}
            name="localidade"
            value={form.localidade}
            onChange={onChangeForm}
          />
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3]}>
          <FormLabel
            htmlFor="country"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Estado:
          </FormLabel>
          <Select
            id="country"
            name="country"
            autoComplete="country"
            placeholder="Selecione uma opção"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            value={form.uf}
          >
            {states.map((state, index) => {
              return (
                <option key={index} value={state.value}>
                  {state.label}
                </option>
              );
            })}
          </Select>
        </FormControl>
      </Flex>
    </>
  );
};

const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Details
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Country / Region
        </FormLabel>
        <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Street address
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
    </>
  );
};

const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Social Handles
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Website
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: "gray.800",
              }}
              color="gray.500"
              rounded="md"
            >
              http://
            </InputLeftAddon>
            <Input
              type="tel"
              placeholder="www.example.com"
              focusBorderColor="brand.400"
              rounded="md"
            />
          </InputGroup>
        </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            About
          </FormLabel>
          <Textarea
            placeholder="you@example.com"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: "sm",
            }}
          />
          <FormHelperText>
            Brief description for your profile. URLs are hyperlinked.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
};

export default function StepForm() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [cep, setCep] = useState("");
  const [numberCep, setNumberCep] = useState("");
  const [invalidCep, setInvalidCep] = useState(false);

  const adress: IAdressCep = {
    bairro: "",
    cep: "",
    complemento: "",
    localidade: "",
    logradouro: "",
    uf: "",
  };

  const { form, onChangeForm, setForm, clean } = useForm(adress);

  const [fullAdress, setFullAdress] = useState<IFullAdress>();

  async function searchCep() {
    if (cep.length === 8) {
      await axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          console.log("res", response.data);
          if (response.data.erro) {
            setInvalidCep(true);
            clean();
            setNumberCep("")
          } else {
            setForm({
              bairro: response.data.bairro,
              complemento: response.data.complemento,
              localidade: response.data.localidade,
              logradouro: response.data.logradouro,
              uf: response.data.uf,
            });
            setInvalidCep(false);
          }
        })
        .catch((error) => {});
    }
  }

  useEffect(() => {
    searchCep();
  }, [cep]);

  async function sendValues() {
    setFullAdress({ ...form, cep: cep, numero: Number(numberCep) });
  }

  console.log("full Adress",fullAdress);
  

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={900}
        flexGrow={1}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          colorScheme={"pink"}
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>

        {step === 1 ? (
          <Form1
            form={form}
            onChangeForm={onChangeForm}
            setNumberCep={setNumberCep}
            numberCep={numberCep}
            invalidCep={invalidCep}
            setCep={setCep}
            cep={cep}
          />
        ) : step === 2 ? (
          <Form2 />
        ) : (
          <Form3 />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                  sendValues();
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
