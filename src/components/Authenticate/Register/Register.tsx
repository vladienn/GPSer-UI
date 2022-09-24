import React, { useState } from "react";

import { register } from "../../../services/auth.service";

import { useNavigate } from 'react-router-dom';
import TextField from "@mui/material/TextField/TextField";
import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper/Paper";
import { Alert, Avatar, Box, Checkbox, Container, createStyles, createTheme, CssBaseline, FormControlLabel, Grid, Link, ThemeProvider, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AlertMassage from "../../Alerts/AlertMessage";
import { handleChange } from "../../../utils/loginUtil";
import UsernameField from "../Login/UsernameField/UsernameField";
import PasswordField from "../Login/PasswordField/PasswordField";
import EmailField from "./EmailField/EmailField";
import FirstNameField from "./FirstNameField/FirstNameField";
import LastNameField from "./LastNameField/LastNameField";

const theme = createTheme ();

function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const [errorMsg, setErrorMsg] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = (e:any) => {
    setLoading(true);
    setErrorMsg("");

    e.preventDefault();

    register(username, password, firstName, lastName, email).then(
      () => {
        console.log("success");
        navigate("/profile");
        //window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
          
          console.log(resMessage);

          setLoading(false);
          setErrorMsg(resMessage);
      }
    );
  };

  return (    
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs"  sx={{ }} >
          <CssBaseline />
          <Paper variant="outlined" sx={{ 
              my: { xs: 23, md: 23 }, 
              p: { xs: 2, md: 3 },
              display: 'flex',
              direction: "column",
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: "center",
            }}>
              
            <Avatar sx={{ m: 1 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={(e: any) => handleRegister(e)} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                  <FirstNameField setValue={setFirstName}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <LastNameField setValue={setLastName}/>
                </Grid>
                <Grid item xs={12}>
                  <UsernameField setValue={setUsername}/>
                </Grid>
                <Grid item xs={12}>
                  <PasswordField setValue={setPassword}/>
                </Grid>
                <Grid item xs={12}>
                  <EmailField setValue={setEmail}/>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign in
              </Button>
              {errorMsg ? <AlertMassage message={errorMsg} /> : null}
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                  Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
            </Paper>
      </Container>
    </ThemeProvider>
  )
};

export default Register;