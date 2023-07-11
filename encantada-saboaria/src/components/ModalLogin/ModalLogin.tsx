import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";
import ModalForgot from "../ModalForgot/ModalForgot";
import ModalRegister from "../ModalRegister/ModalRegister";
import {
  StyledForm,
  StyledInput1,
  StyledInput2,
  StyledButton,
  StyledA,
  StyledDiv,
} from "./Styles";
import foto from "../../assets/logo2.png";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/User";
import { useState } from "react";


function ModalLogin(props: any) {
  const { form, onChangeForm, clean } = useForm({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false)
  let navigate = useNavigate()

  const onSubmitForm = (event: any) => {
    event.preventDefault();
    login(form, clean, navigate, setIsLoading)
  };
  return (
    <Modal
      isOpen={props.loginOpen.isOpen}
      onClose={props.loginOpen.onClose}
      size="lg"
      blockScrollOnMount={false}
      isCentered
    >
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(3px)" />
      <ModalContent sx={{ borderRadius: "0px" }}>
        <ModalHeader
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={foto} style={{ width: "240px", height: "100px" }} />
        </ModalHeader>

        <ModalCloseButton />
        <ModalBody
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Great to have you back!</h2>
          <StyledForm onSubmit={onSubmitForm}>
            <StyledInput1
              name="email"
              type="text"
              placeholder="Email"
              value={form.email}
              onChange={onChangeForm}
              required
            />
            <StyledInput2
              name="password"
              type="password"
              placeholder="Senha"
              value={form.password}
              onChange={onChangeForm}
              required
            />
            <StyledA
              onClick={() => {
                props.forgotOpen.onOpen();
                props.loginOpen.onClose();
              }}
            >
              forgot your email?
            </StyledA>
            <StyledButton type="submit">Log in</StyledButton>
            <StyledDiv>
              Don't have an account?
              <StyledA
                style={{ marginLeft: "5px" }}
                onClick={() => {
                  props.registerOpen.onOpen();
                  props.loginOpen.onClose();
                }}
              >
                Register now
              </StyledA>
            </StyledDiv>
          </StyledForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalLogin;
