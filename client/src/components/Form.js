import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import style from "../../styles/form.module.css";
import NumberCard from "../masks/NumberCard";
import Date from "../masks/Date";
import Cvv from "../masks/Cvv";
import Amount from "../masks/Amount";

import useValidate from "../hooks/useValidate";

const inputProps = [
  { name: "cardNum", label: "Card Number", inputComponent: NumberCard },
  { name: "date", label: "Expiration Date", inputComponent: Date },
  { name: "amount", label: "Amount", inputComponent: Amount },
  { name: "cvv", label: "CVV", inputComponent: Cvv, type: "password" },
];

const Form = () => {
  const [formState, setForm] = useState({
    cardNum: { value: "", error: false },
    date: { value: "", error: false },
    cvv: { value: "", error: false },
    amount: { value: "", error: false },
  });

  const handlerChange = (name) => (value) => {
    const isValidate = useValidate(name, value);
    setForm({ ...formState, [name]: { value, error: isValidate } });
  };

  const [disabledButton, setDisable] = useState(true);

  const checkErrors = () =>
    Object.keys(formState).reduce(
      (acc, currKey) =>
        formState[currKey].value.length && formState[currKey].error === acc,
      true,
    );

  useEffect(() => {
    const isValid = !checkErrors();
    setDisable(isValid);
  }, [formState]);

  return (
    <Box component="form" className={style.container}>
      <Box className={style.form}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignContent="space-around"
          sx={{ flexWrap: "wrap", height: "100%" }}
        >
          {inputProps.map(({ name, inputComponent, ...other }) => (
            <TextField
              className={style[name]}
              key={name}
              error={formState[name].error}
              value={formState[name].value}
              name={name}
              onChange={handlerChange(name)}
              InputProps={{
                inputComponent,
              }}
              {...other}
            />
          ))}
        </Stack>
      </Box>
      <Button disabled={disabledButton}>Send</Button>
    </Box>
  );
};

export default Form;
