import React, { useState } from "react";

import { login } from "../../services/auth.service";

import { useNavigate } from 'react-router-dom';
import TextField from "@mui/material/TextField/TextField";
import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper/Paper";
import { Avatar, Box, Checkbox, Container, createStyles, createTheme, CssBaseline, FormControlLabel, Grid, Link, ThemeProvider, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const theme = createTheme();

const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setValue: React.Dispatch<React.SetStateAction<string>>) =>{
  setValue(e.target.value);
};

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    setLoading(true);
    console.log(username);
    
    login(username, password).then(
      () => {
        navigate("/profile");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        setLoading(false);
      }
    );
  };

  return (    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: "center",
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label={"User Name"}
                  name="username"
                  autoComplete="username"
                  onChange = {(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setUsername)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange = {(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setPassword)}
                />
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
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in
            </Button>
            <Grid container justifyContent="flex-end">
            <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
};

export default Login;