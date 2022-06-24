import React, { useState, useEffect } from "react";
import { Box, Grid, TextField } from "@mui/material";
import style from "../../styles/form.module.css";
import NumberCard from "../masks/NumberCard";
import Date from "../masks/Date";
import Cvv from "../masks/Cvv";
import Amount from "../masks/Amount";

import useValidate from "../hooks/useValidate";

const Form = () => {
  const [formState, setForm] = useState({
    cardNum: { value: "", error: false },
    date: { value: "", error: false },
    cvv: { value: "", error: false },
    amount: { value: "", error: false },
  });

  const handlerChange = (newValue) => {
    setForm({ ...formState, ...newValue });
  };

  const getValidate = (name) => {
    const isValidate = useValidate(name, formState);
    setForm({
      ...formState,
      [name]: { ...formState[name], error: isValidate },
    });
  };

  return (
    <Box component="form" className={style.container}>
      <Box className={style.form}>
        <Grid sx={{ height: "100%" }} container columnSpacing={3}>
          <Grid item xs={12}>
            <TextField
              error={formState.cardNum.error}
              onBlur={() => getValidate("cardNum")}
              required
              fullWidth
              label="Card Number"
              value={formState.cardNum.value}
              name="cardNum"
              onChange={handlerChange}
              InputProps={{
                inputComponent: NumberCard,
              }}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              error={formState.date.error}
              fullWidth
              label="Expiration Date"
              value={formState.date.value}
              onBlur={() => getValidate("date")}
              name="date"
              onChange={handlerChange}
              InputProps={{
                inputComponent: Date,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              error={formState.amount.error}
              value={formState.amount.value}
              onBlur={() => getValidate("amount")}
              onChange={handlerChange}
              name="amount"
              fullWidth
              label="Amount"
              InputProps={{
                inputComponent: Amount,
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              error={formState.cvv.error}
              value={formState.cvv.value}
              onChange={handlerChange}
              fullWidth
              onBlur={() => getValidate("cvv")}
              InputProps={{
                inputComponent: Cvv,
              }}
              type="password"
              name="cvv"
              label="CVV"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Form;
