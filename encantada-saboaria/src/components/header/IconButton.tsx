import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

const IconButtonComponent = ({hamburguerOpen }: any) => {
  return (
    <IconButton
      onClick={hamburguerOpen.onToggle}
      icon={
        hamburguerOpen.isOpen ? (
          <CloseIcon w={3} h={3} />
        ) : (
          <HamburgerIcon w={5} h={5} />
        )
      }
      variant={"ghost"}
      aria-label={"Toggle Navigation"}
    />
  );
};

export default IconButtonComponent;
