import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CurrencyDrop(props) {
    const { onCashCurrencyPress, cashCurrency } = props;

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="simple-select-label">currency</InputLabel>
                <Select
                    labelId="simple-select-label"
                    id="demo-simple-select"
                    value={cashCurrency}
                    label="currency"
                    onChange={onCashCurrencyPress}
                >
                    <MenuItem value={"UAH"}>UAH</MenuItem>
                    <MenuItem value={"USD"}>USD</MenuItem>
                    <MenuItem value={"EUR"}>EUR</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
