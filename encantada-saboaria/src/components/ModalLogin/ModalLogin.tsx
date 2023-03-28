import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react'
  import { StyledForm, StyledInput1, StyledInput2, StyledButton, StyledA, StyledDiv } from './Styles';

  function ModalLogin(props: any) {

    return (

        <Modal isOpen={props.loginOpen.isOpen} onClose={props.loginOpen.onClose} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader sx={{display:"flex", justifyContent:"center", alignItems:"center"}}><p style={{width:"70%", borderBottom:"1px solid rgba(0,0,0,0.2)", textAlign:"center", paddingBottom:"10px"}}>Encantada Saboaria</p></ModalHeader>
            
            <ModalCloseButton />
            <ModalBody sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                
            <h2>Great to have you back!</h2>
            <StyledForm>

            <StyledInput1 name="Email" type="text" placeholder="Email" />
            <StyledInput2 name="Senha" type="password" placeholder="Senha" />
            <StyledA>forgot your email?</StyledA>
            <StyledButton>Log in</StyledButton>
            <StyledDiv>Don't have an account?<StyledA style={{marginLeft:"5px"}}>Register now</StyledA></StyledDiv>
            </StyledForm>
            
            </ModalBody>
  
           
          </ModalContent>
        </Modal>
  
    )
  }

  export default ModalLogin;