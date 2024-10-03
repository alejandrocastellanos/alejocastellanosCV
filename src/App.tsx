import React from 'react';

import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';

import ContactInformation from "./components/contactInformation";
import Education from "./components/education";
import SkillsDetails from "./components/skillsDetails";
import ExperienceResume from "./components/experienceResume";
import Experience from "./components/experience";
import {Card, CardContent, Typography} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import MenuIcon from '@mui/icons-material/Menu';
import theme from "./components/theme";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
    const contactInfo = {
        email: 'mailto:alejandrocastellanos0827@gmail.com',
        phone: '+57',
        linkedin: 'https://www.linkedin.com/in/alejo-castellanos/',
        github: 'https://github.com/alejandrocastellanos'
    }

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);
    const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const [openModal, setOpenModal] = React.useState(false);

    const handleClickOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };



    return (
      <>
          <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 5 }}>
                      <Avatar
                          alt="Profile Image"
                          src="/images/picture_profile.png"
                          sx={{ width: 200, height: 200, boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.45)', marginTop: 3}}
                      />
                  </Grid>
                  <Grid size={{ xs: 2, md: 5 }}>
                      <Typography
                          sx={{
                              [theme.breakpoints.down('sm')]: {
                                  fontSize: '2rem', // Tamaño más pequeño en pantallas pequeñas
                              },
                              [theme.breakpoints.up('md')]: {
                                  fontSize: '3.5rem', // Tamaño más grande en pantallas medianas o superiores
                              },
                          }}
                          style={{ fontFamily: 'glitchgoblin' }}>
                          ALEJO CASTELLANOS
                      </Typography>
                      <Typography
                          sx={{
                              mb: 3,
                              [theme.breakpoints.down('sm')]: {
                                  fontSize: '1rem', // Tamaño más pequeño en pantallas pequeñas
                              },
                              [theme.breakpoints.up('md')]: {
                                  fontSize: '1.5rem', // Tamaño más grande en pantallas medianas o superiores
                              }
                      }}
                          style={{fontFamily: 'glitchgoblin'}}
                      >
                          Backend Developer 👨‍💻
                          Python Specialist
                      </Typography>
                  </Grid>
                  <Grid size={{ xs: 10, md: 2}}>
                      {/* MENU */}
                      <React.Fragment>
                          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                              <Typography sx={{ minWidth: 100 }}></Typography>
                              <Typography sx={{ minWidth: 100 }}></Typography>
                              <Tooltip title="Menu">
                                  <IconButton
                                      onClick={handleClickMenu}
                                      size="large"
                                      sx={{ ml: 2 }}
                                      aria-controls={openMenu ? 'account-menu' : undefined}
                                      aria-haspopup="true"
                                      aria-expanded={openMenu ? 'true' : undefined}
                                  >
                                      <Avatar sx={{ width: 42, height: 42, bgcolor: '#4da2c1' }}><MenuIcon/></Avatar>
                                  </IconButton>
                              </Tooltip>
                          </Box>
                          <Menu
                              anchorEl={anchorEl}
                              id="account-menu"
                              open={openMenu}
                              onClose={handleCloseMenu}
                              onClick={handleCloseMenu}
                              slotProps={{
                                  paper: {
                                      elevation: 0,
                                      sx: {
                                          overflow: 'visible',
                                          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                          mt: 1.5,
                                          '& .MuiAvatar-root': {
                                              width: 32,
                                              height: 32,
                                              ml: -0.5,
                                              mr: 1,
                                          },
                                          '&::before': {
                                              content: '""',
                                              display: 'block',
                                              position: 'absolute',
                                              top: 0,
                                              right: 14,
                                              width: 10,
                                              height: 10,
                                              bgcolor: 'background.paper',
                                              transform: 'translateY(-50%) rotate(45deg)',
                                              zIndex: 0,
                                          },
                                      },
                                  },
                              }}
                              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                          >
                              <MenuItem onClick={handleClickOpenModal}>
                                  <ListItemIcon>
                                      <ContactPageIcon fontSize="small" />
                                  </ListItemIcon>
                                  Contact
                              </MenuItem>
                              <MenuItem onClick={handleCloseMenu}>
                                  <ListItemIcon>
                                      <DownloadIcon fontSize="small" />
                                  </ListItemIcon>
                                  Download CV
                              </MenuItem>
                          </Menu>
                      </React.Fragment>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                      <Card sx={{minWidth: 275}}>
                          <CardContent>
                              <Typography sx={{ mb: 1.5 }} variant="h5" component="div" style={{ fontFamily: 'glitchgoblin' }}>
                                  Education
                              </Typography>
                              <Typography gutterBottom sx={{fontSize: 14}}>
                                  <Education institution="Universidad Unipanamericana"
                                             degree="Bachelor of Science in Systems Engineering"
                                             startDate="February 2011"
                                             endDate="February 2017"/>
                                  <br/>
                                  <Education institution="Bulevu Escuela de Formación" degree="English B2"
                                             startDate="September 2020" endDate="September 2021"/>
                              </Typography>
                          </CardContent>
                      </Card><br/>
                      <Card sx={{minWidth: 275}}>
                          <CardContent>
                              <SkillsDetails/>
                          </CardContent>
                      </Card>
                      <br/>
                  </Grid>
                  <Grid size={{ xs: 12, md: 8 }}>
                      <ExperienceResume/>
                      <Experience/>
                  </Grid>

                  {/*MODAL*/}
                  <React.Fragment>
                      <Dialog
                          open={openModal}
                          TransitionComponent={Transition}
                          keepMounted
                          onClose={handleCloseModal}
                          aria-describedby="alert-dialog-slide-description"
                      >
                          <DialogTitle style={{ fontFamily: 'glitchgoblin' }}>{"Contact"}</DialogTitle>
                          <DialogContent>
                              <DialogContentText id="alert-dialog-slide-description">
                                  <ContactInformation contact={contactInfo}/>
                              </DialogContentText>
                          </DialogContent>
                      </Dialog>
                  </React.Fragment>

              </Grid>
          </Box>
      </>
    );
}

export default App;
