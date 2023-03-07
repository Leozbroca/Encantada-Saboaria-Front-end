import react, { useState } from "react";
import { Main, InputContact, ButtonSendForm, Form } from "./Styles";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");


  console.log({name,email,text})

  return (
    <Main>
      <p>Envie-Nos Uma Mensagem</p>
      <div>
        <Form>
          <InputContact
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Seu nome..."
            required
          />
          <InputContact
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Seu email..."
            required
          />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            cols={100}
            placeholder={"Sua mensagem ..."}
            required
          ></textarea>
          <ButtonSendForm type="submit">Enviar</ButtonSendForm>
        </Form>
      </div>
    </Main>
  );
};

export default Contact;
