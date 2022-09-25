import {
  Avatar,
  Button,
  CSSObject,
  Drawer,
  IconButton,
  Link,
  Menu,
  MenuItem,
  styled,
  SvgIcon,
  Theme,
  Toolbar,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ModeOfTravelOutlinedIcon from "@mui/icons-material/ModeOfTravelOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Container from "@mui/material/Container/Container";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/system/Box/Box";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "../../services/auth.service";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Divider from "@mui/material/Divider";
import CssBaseline from "@mui/material/CssBaseline";

const drawerWidth = 100;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  alignItems: "center",
}));

const Navbar = () => {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);

  const currentUser = getCurrentUser();

  useEffect(() => {
    if (currentUser !== null) {
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

  const handleDrawerStae = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    //pisition fixed and static
    <>
      <AppBar position="fixed">
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {loggedIn ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerStae}
              edge="start"
              sx={{
                marginRight: open ? "" : 10,
                marginLeft: open ? 9 : "",
              }}
            >
              {open ? <ArrowBackIosNewIcon /> : <MenuIcon />}
            </IconButton>
          ) : null}
          <Box sx={{ display: "flex" }}>
            <ModeOfTravelOutlinedIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => navigate("/")}
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              GPSer
            </Typography>

            <ModeOfTravelOutlinedIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              GPSer
            </Typography>
          </Box>

          <Box sx={{ display: "flex" }}>
            {loggedIn ? (
              <Box sx={{ flexGrow: 0 }}>
                <Typography
                  noWrap
                  component="a"
                  sx={{
                    mr: 1,
                    fontWeight: 100,
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  {currentUser?.userName}
                </Typography>
                <Tooltip title="Open settings">
                  <IconButton size="large" onClick={handleOpenUserMenu}>
                    <AccountCircle fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <Link
                    href="/profile"
                    style={{
                      textDecoration: "none",
                      display: "block",
                      color: "inherit",
                    }}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                  </Link>
                  <MenuItem onClick={handleCloseUserMenu}>My account</MenuItem>
                </Menu>
              </Box>
            ) : null}

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => (loggedIn ? handleLogout() : handleLogin())}
              color="inherit"
              sx={{ display: { xs: "none", md: "flex" }, ml: 1 }}
            >
              {loggedIn ? (
                <LogoutOutlinedIcon
                  sx={{ display: { xs: "none", md: "flex" } }}
                />
              ) : (
                <LoginOutlinedIcon
                  sx={{ display: { xs: "none", md: "flex" } }}
                />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {loggedIn ? (
        <Drawer variant="permanent" open={open}>
          <DrawerHeader></DrawerHeader>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <SvgIcon>
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </SvgIcon>
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{
                      display: open ? "flex" : "none",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      ) : null}
    </>
  );
};

export default Navbar;
