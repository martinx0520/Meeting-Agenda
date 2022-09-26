import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';

import { SocketContext } from '../../context';
import useStyles from './VideoPlayerStyle';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      <Paper className={classes.paper}>
        {stream && (
          <div style={{ marginLeft: !callAccepted ? '25%' : '0px' } } className={classes.paper2}>
            <div className={classes.videoContainer}>
              <Typography className={classes.name} variant="h5" gutterBottom>{name || 'Name'}</Typography>
              <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
            </div>
          </div>
        )}
        {callAccepted && !callEnded && (
          <div style={{ marginLeft: '5px' } } className={classes.paper2}>
            <div className={classes.videoContainer}>
              <Typography className={classes.name} variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
              <video playsInline ref={userVideo} autoPlay className={classes.video} />
            </div>
          </div>
        )}
      </Paper>
    </Grid>
  );
};

export default VideoPlayer;