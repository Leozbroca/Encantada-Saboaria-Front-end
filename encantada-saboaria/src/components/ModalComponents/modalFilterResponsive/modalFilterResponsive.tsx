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
  isOpen: boolean;
  onClose: () => void;
  setFilterEssence: React.Dispatch<React.SetStateAction<IFilter>>;
  setPriceCategory: React.Dispatch<React.SetStateAction<number>>;
}

const ModalFilterResponsive = ({
  isOpen,
  onClose,
  setFilterEssence,
  setPriceCategory,
}: PropsModalFilter) => {
  return (
    <>
      <Drawer size="sm" isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay bg="blackAlpha.700" />
        <DrawerContent sx={{ backgroundColor: "#f8f9fa" }}>
          <DrawerCloseButton
            sx={{
              left: 0,
              marginLeft: "10px",
              marginRight: "10px",
              color: "black",
            }}
          />
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
