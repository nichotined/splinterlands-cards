import { IconButton, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@mui/material";
import * as Icon from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => {
              window.location.href = "/cards";
            }}
          >
            <Icon.MenuBook />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Splinterlands Cards
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
