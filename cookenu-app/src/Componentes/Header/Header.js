import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { StyledToobar } from "./styled";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Menu";
import { makeStyles } from "@material-ui/core";
import { goToFeed, goToLogin } from "../../Router/Coordinator";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  IconButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const history = useHistory();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToobar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button
            onClick={() => goToFeed(history)}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Cookenu
          </Button>
          <Button onClick={() => goToLogin(history)} color="inherit">
            Login
          </Button>
        </StyledToobar>
      </AppBar>
    </Box>
  );
};

export default Header;
