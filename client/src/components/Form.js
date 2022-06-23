import React from "react";
import {Box, Grid, TextField} from '@mui/material';
import style from "../../styles/form.module.css";
import NumberCard from "../masks/NumberCard"

const Form = () => {
    return(
    <Box component="form" className={style.container}>
        <Box className={style.form}>
            <Grid sx={{height: "100%"}} container columnSpacing={3}>
                <Grid item xs={12}>
                    <TextField fullWidth label="Card Number"      InputProps={{
          inputComponent: NumberCard
        }} />
                </Grid>
                <Grid  item xs={5}>
                    <TextField fullWidth label="Expiration Date" />
                </Grid>                
                <Grid  item xs={4}>
                    <TextField fullWidth label="Amount" />
                </Grid>                
                <Grid item xs={3}>
                    <TextField fullWidth label="CVV"  />
                </Grid>
            </Grid>
        </Box>
    </Box>
    )
}

export default Form;