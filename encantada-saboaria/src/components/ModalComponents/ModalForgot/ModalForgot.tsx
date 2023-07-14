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

function ModalForgot(props: any) {
  return (
    <Modal
      isOpen={props.forgotOpen.isOpen}
      onClose={props.forgotOpen.onClose}
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
          <h2>Forgot your email!</h2>
          <StyledForm>
            <StyledInput1 name="Email" type="text" placeholder="Email" />
          </StyledForm>
          <button
            onClick={() => {
              props.forgotOpen.onClose();
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

export default ModalForgot;
