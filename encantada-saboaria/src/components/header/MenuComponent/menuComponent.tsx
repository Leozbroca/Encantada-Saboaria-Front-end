import { useState } from "react";
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
import { DesktopSubNav } from "./desktopSubNav";
import {
  MainResponsive,
  MenuMainResponsive,
  LoginMainResponsive,
  StyledMenuForm,
  StyledMenuInput1,
  StyledMenuInput2,
  StyledMenuButton,
  StyledMenuA,
  StyledMenuDiv,
} from "./Styles";

import { AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

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
  const [isDiv1Active, setDiv1Active] = useState(false);
  const [isDiv2Active, setDiv2Active] = useState(false);

  const toggleDiv1 = () => {
    setDiv1Active(!isDiv1Active);
    setDiv2Active(false);
  };

  const toggleDiv2 = () => {
    setDiv2Active(!isDiv2Active);
    setDiv1Active(false);
  };

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      display={{ md: "none" }}
      min-height={"400px"}
    >
      <MainResponsive>
        <MenuMainResponsive active={isDiv1Active} onClick={toggleDiv1}>
          <AiOutlineMenu size={50} />
          <p>MENU</p>
        </MenuMainResponsive>
        <LoginMainResponsive active={isDiv2Active} onClick={toggleDiv2}>
          <BsFillPersonFill size={50} />
          <p>LOGIN</p>
        </LoginMainResponsive>
      </MainResponsive>
      {isDiv1Active ? (
        NAV_ITEMS.map((navItem) => (
          <MobileNavItem
            key={navItem.label}
            {...navItem}
            hamburguerOpen={hamburguerOpen}
          />
        ))
      ) : (
        <StyledMenuForm>
          <StyledMenuInput1
            name="email"
            type="text"
            placeholder="Email"
            // value={form.email}
            // onChange={onChangeForm}
            required
          />
          <StyledMenuInput2
            name="password"
            type="password"
            placeholder="Senha"
            // value={form.password}
            // onChange={onChangeForm}
            required
          />
          <StyledMenuA
            onClick={() => {
              // props.forgotOpen.onOpen();
              // props.loginOpen.onClose();
            }}
          >
            Esqueceu seu email?
          </StyledMenuA>
          <StyledMenuButton type="submit">Login</StyledMenuButton>
          <StyledMenuDiv>
            Não tem conta ?
            <StyledMenuA
              style={{ marginLeft: "5px" }}
              onClick={() => {
                // props.registerOpen.onOpen();
                // props.loginOpen.onClose();
              }}
            >
              Cadastre-se
            </StyledMenuA>
          </StyledMenuDiv>
        </StyledMenuForm>
      )}
    </Stack>
  );
};
