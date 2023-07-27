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
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NAV_ITEMS, NavItem } from "./IMenuComponent";
import { useNavigate } from "react-router-dom";
import { goTo } from "../../../routes/Coordinator";
import { MobileNavItem } from "./mobileNavItem";
import {DesktopSubNav} from "./desktopSubNav"
export const DesktopNav = () => {
  
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const navigate = useNavigate();

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                onClick={() => goTo(navigate, `/${navItem.href}`)}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export const MobileNav = (hamburguerOpen: any) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          key={navItem.label}
          {...navItem}
          hamburguerOpen={hamburguerOpen}
        />
      ))}
    </Stack>
  );
};
