import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Snackbar } from "@mui/material";
import style from "../../styles/form.module.css";
import NumberCard from "../masks/NumberCard";
import Date from "../masks/Date";
import Cvv from "../masks/Cvv";
import Amount from "../masks/Amount";

import useValidate from "../hooks/useValidate";
import useSendData from "../hooks/useSendData";

const inputProps = [
  { name: "CardNum", label: "Card Number", inputComponent: NumberCard },
  { name: "ExpDate", label: "Expiration Date", inputComponent: Date },
  { name: "Amount", label: "Amount", inputComponent: Amount },
  { name: "Cvv", label: "CVV", inputComponent: Cvv, type: "password" },
];

const Form = () => {
  const [snackState, setSnack] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    message: "",
  });
  const { vertical, horizontal, ...snakeProps } = snackState;
  const setOpenSnake = (message) =>
    setSnack({ ...snackState, message, open: true });

  const [formState, setForm] = useState({
    CardNum: { value: "", error: false },
    ExpDate: { value: "", error: false },
    Cvv: { value: "", error: false },
    Amount: { value: "", error: false },
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

  const getSend = useSendData(formState, setOpenSnake);

  return (
    <>
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
        <Button
          onClick={getSend}
          className={style.button}
          disabled={disabledButton}
        >
          Send
        </Button>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        onClose={() => setSnack({ ...snackState, open: false })}
        {...snakeProps}
      />
    </>
  );
};

export default Form;
