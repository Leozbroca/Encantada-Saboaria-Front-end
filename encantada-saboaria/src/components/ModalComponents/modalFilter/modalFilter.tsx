import { useState, useEffect } from "react";
import {
  chakra,
  Checkbox,
  CheckboxGroup,
  Flex,
  Stack,
  Text,
  useCheckbox,
  useCheckboxGroup,
} from "@chakra-ui/react";
import { Collapse } from "@chakra-ui/transition";
import { Button, Box } from "@chakra-ui/react";
import {
  CategoriesFilter,
  Filter,
  FilterEssenceP,
  Main,
  PriceCategories,
} from "./Styled";
import axios from "axios";
import { Url } from "../../../constants/Url";
import { IFilter } from "../../../pages/products/ProductPage";
import ICategory from "../../../interface/ICategory";
import { ArrowForwardIcon } from "@chakra-ui/icons";
interface PropsModalFilter {
  isOpen: boolean;
  onClose?:any;
  setFilterEssence: React.Dispatch<React.SetStateAction<IFilter>>;
  setPriceCategory: React.Dispatch<React.SetStateAction<number>>;
}

const ModalFilter = ({
  isOpen,
  onClose,
  setFilterEssence,
  setPriceCategory,
}: PropsModalFilter) => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const getCategories = async (): Promise<void> => {
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
      <FilterEssenceP
        key={category._id}
        onClick={() =>
         { setFilterEssence({ nome: category.nome, _id: category._id });onClose()}
        }
      >
        <ArrowForwardIcon />
        {category.nome}
      </FilterEssenceP>
    );
  });

  function CustomCheckbox(props: any) {
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
      useCheckbox(props);
    setPriceCategory(Number(value));
    return (
      <chakra.label
        display="flex"
        flexDirection="row"
        alignItems="center"
        gridColumnGap={2}
        maxW="60"
        rounded="lg"
        px={3}
        py={1}
        cursor="pointer"
        {...htmlProps}
      >
        <input {...getInputProps()} hidden />
        <Flex
          alignItems="center"
          justifyContent="center"
          border="2px solid"
          borderColor="black"
          w={4}
          h={4}
          {...getCheckboxProps()}
        >
          {state.isChecked && <Box w={2} h={2} bg="#00033D" />}
        </Flex>
        <Text
          color="gray.700"
          {...getLabelProps()}
          _hover={{ color: "#00033D" }}
        >
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(props.value - 10)}{" "}
          -{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(props.value)}
        </Text>
      </chakra.label>
    );
  }

  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: [],
  });

  return (
    <Main>
      <Collapse in={isOpen} animateOpacity>
        <Box color="black" mt="4" rounded="md" shadow="md">
          <Filter>
            <CategoriesFilter>
              <h1>Categorias</h1>
              <div>{renderCategory}</div>
            </CategoriesFilter>
            <PriceCategories>
              <h1>Preços</h1>
              <div>
                <Stack>
                  <CustomCheckbox {...getCheckboxProps({ value: "10" })} />
                  <CustomCheckbox {...getCheckboxProps({ value: "20" })} />
                  <CustomCheckbox {...getCheckboxProps({ value: "30" })} />
                </Stack>
              </div>
            </PriceCategories>
          </Filter>
        </Box>
      </Collapse>
    </Main>
  );
};

export default ModalFilter;
