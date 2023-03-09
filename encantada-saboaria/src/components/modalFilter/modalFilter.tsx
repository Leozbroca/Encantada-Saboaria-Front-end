import { useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import { Collapse } from "@chakra-ui/transition";
import { Button, Box } from "@chakra-ui/react";
import { Filter, FilterEssenceP, Main } from "./Styled";
import axios from "axios";
import { Url } from "../../constants/Url";
import { ICategory } from "../footer/Footer";
import { IFilter } from "../../pages/products/ProductPage";

interface PropsModalFilter {
  isOpen: boolean;
  setFilterEssence: React.Dispatch<React.SetStateAction<IFilter>>;
}

const ModalFilter = ({ isOpen, setFilterEssence }: PropsModalFilter) => {
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
    console.log(category)
    return <FilterEssenceP key={category._id} onClick={()=>setFilterEssence({nome:category.nome,_id:category._id})}>{category.nome}</FilterEssenceP>;
  });

  return (
    <Main>
      <Collapse in={isOpen} animateOpacity>
        <Box color="white" bg="teal.500" mt="4" rounded="md" shadow="md">
          <Filter>
            <h1>Categorias</h1>
            <div>{renderCategory}</div>
          </Filter>
        </Box>
      </Collapse>
    </Main>
  );
};

export default ModalFilter;
