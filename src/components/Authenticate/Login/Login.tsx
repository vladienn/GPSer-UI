import React, { useState } from "react";

import { login } from "../../../services/auth.service";

import { useNavigate } from 'react-router-dom';
import TextField from "@mui/material/TextField/TextField";
import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper/Paper";
import { Alert, Avatar, Box, Checkbox, Container, createStyles, createTheme, CssBaseline, FormControlLabel, Grid, Link, ThemeProvider, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AlertMassage from "../../Alerts/AlertMessage";
import './Login.css';
import { handleChange } from "../../../utils/loginUtil";
import UsernameField from "./UsernameField/UsernameField";
import PasswordField from "./PasswordField/PasswordField";

const theme = createTheme ();

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const [errorMsg, setErrorMsg] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e:any) => {
    setLoading(true);
    setErrorMsg("");
    console.log(username);
    e.preventDefault();

    login(username, password).then(
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
            <Box component="form" onSubmit={(e: any) => handleLogin(e)} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <UsernameField setValue={setUsername}/>
                </Grid>
                <Grid item xs={12}>
                  <PasswordField setValue={setPassword}/>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Remember me."
                  />
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
              <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
            </Paper>
      </Container>
    </ThemeProvider>
  )
};

export default Login;