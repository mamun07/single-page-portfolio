import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  TextField,
  Typography,
} from '@mui/material';
import { SectionTitle } from '../../components/SectionTitle';

import CountUp from 'react-countup';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Contact = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        component="div"
        id="contact"
        py={15}
        mb={-20}
        bgcolor={'primary.main'}
        className="contactmainbg"
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={3}
            display="flex"
            justifyContent={'center'}
            mb={-20}
          >
            <Grid item xs={12} md={8}>
              <Box
                bgcolor="secondary.contrastText"
                borderRadius={2}
                textAlign="center"
                py={8}
                boxShadow={'0px 10px 40px 0px #0000004f'}
                className="contactbg"
              >
                <SectionTitle title="Hire me for your awesome project" />
                <Button
                  variant="contained"
                  onClick={handleClickOpen}
                  sx={{
                    width: '200px',
                    height: '60px',
                    fontSize: '20px',
                    '&:hover': {
                      bgcolor: 'primary.main',
                    },
                  }}
                >
                  Contact Me
                </Button>
                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                >
                  <DialogContent>
                    <DialogTitle textAlign="center" fontSize={30}>
                      Let's Talk
                    </DialogTitle>
                    <Box component="div" width={{ xs: 300, md: 400 }}>
                      <Box
                        mb={3}
                        component="div"
                        display="flex"
                        alignItems="flex-end"
                        flexDirection="row"
                      >
                        <Box sx={{ color: 'action.active', mr: 1, my: 0.5 }}>
                          <i className="las la-lg la-user"></i>
                        </Box>
                        <TextField
                          type={'text'}
                          label="Name"
                          variant="standard"
                          fullWidth
                        />
                        <Box sx={{ color: 'action.active', mr: 1, my: 0.5 }}>
                          <i className="las la-lg la-phone"></i>
                        </Box>
                        <TextField
                          type={'text'}
                          label="Phone"
                          variant="standard"
                          fullWidth
                        />
                      </Box>
                      <Box
                        mb={3}
                        component="div"
                        sx={{ display: 'flex', alignItems: 'flex-end' }}
                      >
                        <Box sx={{ color: 'action.active', mr: 1, my: 0.5 }}>
                          <i className="las la-lg la-envelope"></i>
                        </Box>
                        <TextField
                          type={'email'}
                          label="Email"
                          variant="standard"
                          fullWidth
                        />
                      </Box>
                      <Box
                        mb={3}
                        component="div"
                        sx={{ display: 'flex', alignItems: 'flex-end' }}
                      >
                        <Box sx={{ color: 'action.active', mr: 1, my: 0.5 }}>
                          <i className="las la-lg la-list-ul"></i>
                        </Box>
                        <TextField
                          type={'text'}
                          label="Service"
                          variant="standard"
                          fullWidth
                        />
                      </Box>

                      <Box
                        mb={3}
                        component="div"
                        sx={{ display: 'flex', alignItems: 'flex-end' }}
                      >
                        <input type={'file'} />
                      </Box>
                      <Box
                        mt={3}
                        component="div"
                        sx={{ display: 'flex', alignItems: 'flex-end' }}
                      >
                        <TextField
                          label="Comments"
                          multiline
                          rows={4}
                          fullWidth
                        />
                      </Box>
                    </Box>
                    <Box py={3}>
                      <Button
                        sx={{
                          px: 5,
                          '&:hover': {
                            bgcolor: 'primary.main',
                            color: 'primary.contrastText',
                          },
                        }}
                        size="large"
                        variant="outlined"
                        onClick={handleClose}
                      >
                        Submit
                      </Button>
                    </Box>
                  </DialogContent>
                </Dialog>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        component="div"
        id="contact"
        pt={{ xs: '300px', lg: '350px' }}
        pb={{ xs: '100px', lg: '150px' }}
      >
        <Container maxWidth="xxl">
          <Grid container spacing={0} display="flex" justifyContent={'center'}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                {projectsuccess.map((project, i) => {
                  return (
                    <Grid item xs={6} sm={3} key={i}>
                      <Box component="div" textAlign={'center'}>
                        <Typography
                          variant="subtitle1"
                          color={'primary'}
                          fontSize={{ xs: 30, sm: 50, md: 60, lg: 80 }}
                          fontWeight={300}
                        >
                          <CountUp
                            start={0}
                            end={project.amount}
                            duration={2.75}
                            delay={1}
                          />
                          +
                        </Typography>
                        <Typography
                          variant="h6"
                          fontSize={{ xs: 14, sm: 15, md: 20 }}
                        >
                          {project.title}
                        </Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;

const projectsuccess = [
  {
    title: 'Complete Project',
    amount: '153',
  },
  {
    title: 'In Processes',
    amount: '5',
  },
  {
    title: 'Get Awards',
    amount: '13',
  },
  {
    title: 'Happy Clients',
    amount: '982',
  },
];
