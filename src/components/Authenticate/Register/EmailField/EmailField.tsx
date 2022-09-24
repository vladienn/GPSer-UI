import { TextField } from "@mui/material";
import React from "react";
import { handleChange } from "../../../../utils/loginUtil";

const EmailField= ({setValue}: {setValue: React.Dispatch<React.SetStateAction<string>>;}) => {  
    return (
        <TextField
        required
        fullWidth
        name="email"
        label="Email Address"
        type="email"
        id="email"
        autoComplete="email"
        onChange = {(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setValue)}
        />
    );
  }

  export default EmailField;