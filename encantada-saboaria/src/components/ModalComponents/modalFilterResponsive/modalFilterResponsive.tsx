import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import ModalFilter from "../modalFilter/modalFilter";
import { IFilter } from "../../../pages/products/ProductPage";

interface PropsModalFilter {
  isOpen?: boolean;
  setFilterEssence: React.Dispatch<React.SetStateAction<IFilter>>;
  setPriceCategory: React.Dispatch<React.SetStateAction<number>>;
}

const ModalFilterResponsive = ({
  setFilterEssence,
  setPriceCategory,
}: PropsModalFilter) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <ModalFilter
            isOpen={isOpen}
            setFilterEssence={setFilterEssence}
            setPriceCategory={setPriceCategory}
          />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ModalFilterResponsive;
