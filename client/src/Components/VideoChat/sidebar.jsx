import React, { useState, useContext } from 'react';
import { TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import Button from '@mui/material/Button';

import { SocketContext } from '../../context';
import useStyles from './sidebarStyle'

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const classes = useStyles();

  return (
      <Container className={classes.container}>
        <Paper elevation={10} className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid container className={classes.gridContainer}>
              <Grid item xs={12} md={6} className={classes.padding}>
                <Typography gutterBottom variant="h6">Account Info</Typography>
                <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                <CopyToClipboard text={me} sx={{marginTop: '10px'}}>
                  <Button variant="contained" color="secondary" fullWidth startIcon={<Assignment fontSize="large" />}>
                    Copy Your ID
                  </Button>
                </CopyToClipboard>
              </Grid>
              <Grid item xs={12} md={6} className={classes.padding}>
                <Typography gutterBottom variant="h6">Make a call</Typography>
                <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                {callAccepted && !callEnded ? (
                  <Button variant="contained" color='error' startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} sx={{marginTop: '10px'}}>
                    Hang Up
                  </Button>
                ) : (
                  <Button variant="contained" color='success' startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} sx={{marginTop: '10px'}}>
                    Call
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
          {children}
        </Paper>
      </Container>
  );
};

export default Sidebar;
