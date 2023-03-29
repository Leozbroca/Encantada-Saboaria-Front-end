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
} from "@chakra-ui/react";
import { StyledForm, StyledInput1, StyledInput2 } from "./Styles";

function ModalRegister(props: any) {
  return (
    <Modal
      isOpen={props.registerOpen.isOpen}
      onClose={props.registerOpen.onClose}
      size="lg"
      blockScrollOnMount={false}
      isCentered
    >
      <ModalOverlay 
      bg='blackAlpha.300'
      backdropFilter='blur(3px)'
      />
      <ModalContent sx={{borderRadius:"0px"}}>
        <ModalHeader
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              width: "70%",
              borderBottom: "1px solid rgba(0,0,0,0.2)",
              textAlign: "center",
              paddingBottom: "10px",
            }}
          >
            Encantada Saboaria
          </p>
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
          <h2>Register!</h2>
          <StyledForm>
            <StyledInput1 name="Email" type="text" placeholder="Email" />
            <StyledInput2 name="Senha" type="password" placeholder="Senha" />
          </StyledForm>
          <button
            onClick={() => {
              props.registerOpen.onClose();
              props.loginOpen.onOpen();
            }}
          >
            voltar
          </button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalRegister;
