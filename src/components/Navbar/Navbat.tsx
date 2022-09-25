import { Avatar, Button, IconButton, Link, Menu, MenuItem, Toolbar, Tooltip } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ModeOfTravelOutlinedIcon from '@mui/icons-material/ModeOfTravelOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import AppBar from "@mui/material/AppBar/AppBar";
import Container from "@mui/material/Container/Container";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/system/Box/Box";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from "../../services/auth.service";
import AccountCircle from '@mui/icons-material/AccountCircle';

const pages = ['Devices', 'History'];
const settings = ['Profile', 'Dashboard'];

const Navbar = () =>{
    const navigate = useNavigate();

    const [loggedIn, setLoggedIn] = useState(false);

    const currentUser = getCurrentUser();
    
    useEffect(() => {
        if(currentUser !== null){
            console.log("true");
            setLoggedIn(true);
        } else {
            console.log("false");
            setLoggedIn(false);
        }
    }, [currentUser]);

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const handleLogin= () => {
        navigate("/");
    };

    return(
        <AppBar position="static" >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <ModeOfTravelOutlinedIcon  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => navigate("/")}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              GPSer
            </Typography>
  
              
            { loggedIn ? <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              
            </Box> : null}

            <ModeOfTravelOutlinedIcon  sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              GPSer
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {loggedIn ? pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              )): null}
            </Box> 
  
            { loggedIn ? <Box sx={{ flexGrow: 0 }} >
            <Typography
              noWrap
              component="a"
              sx={{
                mr: 1,
                fontWeight: 100,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
                {currentUser?.userName}
            </Typography>
              <Tooltip title="Open settings">
                <IconButton size="large" onClick={handleOpenUserMenu}>
                  <AccountCircle fontSize="large"/>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Link href="/profile" style={{ textDecoration: 'none', display: 'block' , color: 'inherit'}}>
                    <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                </Link>
                <MenuItem onClick={handleCloseUserMenu}>My account</MenuItem>
              </Menu>
            </Box>: null}

            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => loggedIn ? handleLogout() : handleLogin()}
                color="inherit"
                sx={{ display: { xs: 'none', md: 'flex' }, ml: 1 }}
              >
                 {loggedIn ? 
                <LogoutOutlinedIcon  sx={{ display: { xs: 'none', md: 'flex' } }} />
                :
                <LoginOutlinedIcon  sx={{ display: {  xs: 'none', md: 'flex' } }} />}
            </IconButton>


          </Toolbar>
        </Container>
      </AppBar>
    );
};

export default Navbar;