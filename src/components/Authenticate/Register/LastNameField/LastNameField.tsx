import { TextField } from "@mui/material";
import React from "react";
import { handleChange } from "../../../../utils/loginUtil";

const LastNameField= ({setValue}: {setValue: React.Dispatch<React.SetStateAction<string>>;}) => {  
    return (
        <TextField
        required
        fullWidth
        id="lastName"
        label="Last Name"
        name="lastName"
        autoComplete="family-name"
        onChange = {(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setValue)}
        />
    );
  }

  export default LastNameField;