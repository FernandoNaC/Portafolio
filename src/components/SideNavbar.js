import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider,
        IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material';
import { Edit, Checklist, Carpenter, ChevronRight, ChevronLeft, Menu } from '@mui/icons-material';
import {Link, useNavigate} from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  background: 'rgb(35, 39, 43)',
  color: 'white',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  color: 'white',
  background: 'rgb(35, 39, 43)',
  overflowX: 'visible',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  overflowWrap: 'break-word',
  padding: theme.spacing(0, 1),  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const NewAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  background: 'black',
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const NewDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth, 
    boxSizing: 'border-box',
    overflowX: 'visible',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const NewLink = styled(Link, {})(
  () => ({
    textDecoration: 'none',
    color: 'white',
    '&:hover':{
      opacity: '.75',
      transition: '1s'
    }
  })
  )

const SideNavBar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  const prepareRoute = (text) =>{
    let newString = text.replace(' ', '');
    newString = newString.toLowerCase();
    return (
      newString
    );
  }

  const history = useNavigate();

  function delayAndGo(e, path) {
    e.preventDefault();

    setTimeout(() => history(path), 300);
  }

  return (
    <div style={{ display: 'flex'}}>
      <CssBaseline />
      <NewAppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <Menu/>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <NewLink to={'/'} onClick={(e) => delayAndGo(e, "/")}>Home</NewLink>
          </Typography>
        </Toolbar>
      </NewAppBar>
      <NewDrawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography variant="a" sx={{marginRight: '10px', fontSize:'18px'}}>
            FERNANDO NAVA
          </Typography>
          <IconButton onClick={handleDrawer}>
            {theme.direction === 'rtl' ? <ChevronRight style={{color:'white'}}/> : <ChevronLeft style={{color:'white'}}/>}
          </IconButton>
        </DrawerHeader>
        <Divider/>
        <List>
          {['SOFT SKILLS', 'HARD SKILLS', 'MY WORKS'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block', marginBottom: '5px'}}>
              <NewLink to={`/${prepareRoute(text)}`} onClick={(e) => delayAndGo(e, `/${prepareRoute(text)}`)}> 
                <ListItemButton
                  sx={{
                    height: 48,
                    justifyContent: open ? 'initial' : 'center',
                    padding: 'none',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index === 0 ? <Edit style={{color:'rgb(35, 163, 236)'}}/> : index === 1 ? <Checklist style={{color:'white'}}/>: <Carpenter style = {{color:'rgb(35, 163, 236)'}}/>}
                  </ListItemIcon>
                  <ListItemText disableTypography>
                      <Typography variant="body2" style={{ fontSize:'14px' }} sx={{ opacity: open ? 1 : 0, overflowWrap: 'break-word'}}>{text}</Typography> 
                  </ListItemText> 
                </ListItemButton>
              </NewLink>
            </ListItem>
          ))}
        </List>
      </NewDrawer>
    </div>
  );
}

export default SideNavBar;