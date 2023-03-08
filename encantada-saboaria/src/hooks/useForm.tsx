import { useState } from "react";

export const useForm = (initialState: any) => {
  const [form, setForm] = useState(initialState);

  const onChangeForm = (event:any) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const clean = () => {
    setForm(initialState);
  };

  return { form, onChangeForm, clean, setForm };
};
