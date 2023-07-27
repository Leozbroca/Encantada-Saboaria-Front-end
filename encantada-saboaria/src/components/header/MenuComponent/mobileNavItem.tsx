import { useNavigate } from "react-router-dom";
import {
  Box,
  Popover,
  PopoverTrigger,
  Stack,
  useColorModeValue,
  Link,
  PopoverContent,
  Text,
  Flex,
  Icon,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { goTo } from "../../../routes/Coordinator";
import { NavItem } from "./IMenuComponent";

export const MobileNavItem = ({
  label,
  children,
  href,
  hamburguerOpen,
}: NavItem) => {
  const navigate = useNavigate();

  return (
    <Stack spacing={4} p={1}  onClick={children && hamburguerOpen.onToggle}>
      <Flex
        py={2}
        as={Link}
        onClick={() => {
          goTo(navigate, `/${href}`);
          hamburguerOpen.hamburguerOpen.onToggle();
        }}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};
