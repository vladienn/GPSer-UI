import { TextField } from "@mui/material";
import React from "react";
import { handleChange } from "../../../../utils/loginUtil";

const UsernameField= ({setValue}: {setValue: React.Dispatch<React.SetStateAction<string>>;}) => {
    return (
        <TextField
        required
        fullWidth
        id="username"
        label={"User Name"}
        name="username"
        autoComplete="username"
        autoFocus
        onChange = {(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setValue)}
      />
    );
  }

  export default UsernameField;