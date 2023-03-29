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
  Stack,
  HStack,
  useRadio,
  useRadioGroup,
  Image,
  chakra,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { states } from "./BrasilStates";
import { useForm } from "../../hooks/useForm";
import { IForm1 } from "./Interfaces/IForm1";
import { IAdressCep, IFullAdress } from "./Interfaces/IAdressCep";
import { IMethodPayment } from "./Interfaces/IMethodsPayment";
import { IMethod, methodsPayments } from "./MethodPayments";
import {
  MainMethod,
  MethodStyled,
  ProductsPurchase,
  TotalCash,
} from "./Styled";
import { CartPurchase } from "../../Global/GlobalState";
import { useGlobal } from "../../Global/GlobalStateContext";
import CardCartPurchase from "../CardCartPurchase/CardCartPurchase";
import DetailPayment from "./DetailsPayment";
import { IForm3 } from "./Interfaces/IForm3";

interface IModal2 {
  allMethodPayment: IMethod[];
  setMethodPayment: React.Dispatch<React.SetStateAction<string>>;
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

const Form2 = ({ allMethodPayment, setMethodPayment }: IModal2) => {
  function CustomRadio(props: any) {
    const { image, name, ...radioProps } = props;

    const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
      useRadio(radioProps);

    return (
      <chakra.label
        cursor="pointer"
        width={"100%"}
        border={"1px solid #efbae1"}
        bg={state.isChecked ? "#fbceef" : "transparent"}
      >
        <input {...getInputProps({})} hidden />
        <Box
          {...getCheckboxProps()}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          rounded="full"
          height={"50px"}
        >
          <Image src={image} rounded="full" {...getLabelProps()} />
          <p>{props.namePayment}</p>
        </Box>
      </chakra.label>
    );
  }

  const toast = useToast({
    variant: "toast",
  });

  const handleChange = (value: any) => {
    toast({
      title: `Você escolheu o método de pagamento:  ${value}!`,
      duration: 2000,
    });
    setMethodPayment(value);
  };

  const { value, getRadioProps } = useRadioGroup({
    onChange: handleChange,
  });

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Como prefere pagar?
      </Heading>
      <Stack>
        <HStack
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"160px"}
        >
          {allMethodPayment.map((payment: IMethod) => {
            return (
              <CustomRadio
                id={payment.id}
                key={payment.name}
                image={payment.image}
                namePayment={payment.name}
                {...getRadioProps({ value: payment.id })}
              />
            );
          })}
        </HStack>
      </Stack>
    </>
  );
};

const Form3 = ({ fullAdress, methodPayment }: IForm3) => {
  const { total, totalCart } = useGlobal();

  const cartProducts =
    total &&
    total.map((product: CartPurchase) => {
      return <CardCartPurchase key={product.id} {...product} />;
    });

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Revise e confirme a sua compra
      </Heading>
      <ProductsPurchase>
        <TotalCash>
          Voce pagará no total{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(totalCart)}
        </TotalCash>
        {cartProducts.length > 0 ? cartProducts : <p>Não há produtos</p>}
        <DetailPayment fullAdress={fullAdress} methodPayment={methodPayment} />
      </ProductsPurchase>
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
  const [fullAdress, setFullAdress] = useState<IFullAdress>();
  const [methodPayment, setMethodPayment] = useState<string>("");
  const [allMethodPayment, setAllMethodPayment] =
    useState<IMethod[]>(methodsPayments);
  const { sendPayment, totalCart, errorCartEmpty } = useGlobal();

  const adress: IAdressCep = {
    bairro: "",
    cep: "",
    complemento: "",
    localidade: "",
    logradouro: "",
    uf: "",
  };

  const { form, onChangeForm, setForm, clean } = useForm(adress);

  async function searchCep() {
    if (cep.length === 8) {
      await axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          if (response.data.erro) {
            setInvalidCep(true);
            clean();
            setNumberCep("");
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

  // async function getMethodPayment() {
  //   await axios
  //     .get(`https://api.mercadopago.com/v1/payment_methods`, {
  //       headers: {
  //         Authorization: `Bearer ${process.env.TOKEN_KEY_MERCADO_PAGO!}`,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data.message);
  //     });
  // }
  // useEffect(() => {
  //   getMethodPayment();
  // }, []);

  useEffect(() => {
    searchCep();
  }, [cep]);

  async function sendValues() {
    setFullAdress({ ...form, cep: cep, numero: Number(numberCep) });
  }

  return (
    <>
      {errorCartEmpty ? (
        toast({
          position: "top",
          title: "Carrinho vazio",
          description: `${errorCartEmpty}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      ) : (
        <></>
      )}
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={900}
        flexGrow={1}
        p={6}
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
          <Form2
            allMethodPayment={allMethodPayment}
            setMethodPayment={setMethodPayment}
          />
        ) : (
          <Form3 fullAdress={fullAdress} methodPayment={methodPayment} />
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
              {step === 3 ? null : (
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
              )}
            </Flex>
            {step === 3 ? (
              <Button
                w="8rem"
                colorScheme="red"
                variant="solid"
                onClick={() => sendPayment({ methodPayment, totalCart })}
              >
                Finalizar compra
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
