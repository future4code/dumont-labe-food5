import { useState } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm(initialState);
  };

  const setValues = (values) =>{
    setForm(values)
}

  return { form, onChange, resetForm, setValues };
};
