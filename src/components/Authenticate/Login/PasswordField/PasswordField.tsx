import { TextField } from "@mui/material";
import React from "react";
import { handleChange } from "../../../../utils/loginUtil";

const PasswordField= ({setValue}: {setValue: React.Dispatch<React.SetStateAction<string>>;}) => {  
    return (
        <TextField
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="new-password"
        onChange = {(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setValue)}
        />
    );
  }

  export default PasswordField;