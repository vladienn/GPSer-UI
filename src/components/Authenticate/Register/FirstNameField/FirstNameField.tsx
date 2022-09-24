import { TextField } from "@mui/material";
import React from "react";
import { handleChange } from "../../../../utils/loginUtil";

const FirstNameField= ({setValue}: {setValue: React.Dispatch<React.SetStateAction<string>>;}) => {  
    return (
        <TextField
        autoComplete="given-name"
        name="firstName"
        required
        fullWidth
        id="firstName"
        label="First Name"
        autoFocus
        onChange = {(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setValue)}
        />
    );
  }

  export default FirstNameField;