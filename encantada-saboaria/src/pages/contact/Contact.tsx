import axios from "axios";
import react, { useState } from "react";
import { Url } from "../../constants/Url";
import { useForm } from "../../hooks/useForm";
import { Main, InputContact, ButtonSendForm, Form } from "./Styles";

const Contact = () => {
  const { form, onChangeForm, clean } = useForm({
    name: "",
    email: "",
    text: "",
  });

  const sendData = async () => {
    await axios
      .post(`${Url}/contactSend`, form)
      .then((response) => {
        alert(response.data.message);
        clean();
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  const onSubmitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendData();
  };

  return (
    <Main>
      <p>Envie-Nos Uma Mensagem</p>
      <div>
        <Form onSubmit={onSubmitForm}>
          <InputContact
            name="name"
            value={form.name}
            onChange={onChangeForm}
            type="text"
            placeholder="Seu nome..."
            required
          />
          <InputContact
            name="email"
            value={form.email}
            onChange={onChangeForm}
            type="email"
            placeholder="Seu email..."
            required
          />
          <textarea
            name="text"
            value={form.text}
            onChange={onChangeForm}
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
