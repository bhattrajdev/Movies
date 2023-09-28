import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AiFillHome } from "react-icons/ai";
import { BiTrendingUp, BiSolidVideos } from "react-icons/bi";
import { FaFireAlt } from "react-icons/fa";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import PersonIcon from "@mui/icons-material/Person";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const icons = [
  <AiFillHome />,
  <BiSolidVideos />,
  <BiTrendingUp />,
  <FaFireAlt />,
];

const asideLinks = [
  '/',
  '/',
  '/trending',
  '/',
  '/',
  
]

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
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
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Navbar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleUserMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* code for app bar */}
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "black" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div
            sx={{ display: "flex", alignItems: "center", paddingTop: "4px" }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="span"
              sx={{ verticalAlign: "middle" }}
            >
              <Link to="/"> MOVIES</Link>
            </Typography>
          </div>

          {/* Search bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "5px",
            }}
          >
            <InputBase
              placeholder="Search..."
              inputProps={{ style: { color: "white" } }}
              sx={{ ml: 1 }}
            />
            <SearchIcon sx={{ color: "white" }} />
          </div>
          {/* End of Search bar */}

          {/* User Icon and Menu */}
          <IconButton
            color="inherit"
            aria-label="user menu"
            onClick={handleUserMenuOpen}
          >
            <PersonIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleUserMenuClose}
          >
            <MenuItem onClick={handleUserMenuClose}>My Account</MenuItem>
            <MenuItem onClick={handleUserMenuClose}>Logout</MenuItem>
          </Menu>
          {/* End of User Icon and Menu */}
        </Toolbar>
      </AppBar>

      {/* code for drawer */}
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        <List sx={{ marginTop: "70px", fontWeight: "500" }}>
          {["HOME", "FOR YOU", "TRENDING", "LATEST"].map((text, index) => (
            
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <Link to={asideLinks[index]}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  "&:hover": {
                    borderRadius: 4,
                    backgroundColor: "gray",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    fontSize: "20px",
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  {icons[index]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton></Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          overflowX: "hidden",
        }}
      >
        <DrawerHeader />
        {/* the code should load here */}
        <div>   <Outlet /></div>
     
      </Box>
    </Box>
  );
};

export default Navbar;
