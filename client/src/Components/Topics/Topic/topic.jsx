import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import BackIcon from '@mui/icons-material/KeyboardReturn';
import { Divider } from '@mui/material';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deleteTopic } from '../../../actions/actions';
import useStyles from './topicStyle';

const Topic = ({ topic, setCurrentId, setTopicDetail }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Typography className={classes.title} gutterBottom variant="h3" component="h3">{topic.title}</Typography>
      <Divider variant='middle' />
      <div className={classes.overlay}>
        <Button style={{ color: 'black' }} size="large" onClick={() => setTopicDetail(null)}><BackIcon fontSize="default" /></Button>
      </div>
      <CardContent className={classes.details}>
        <Typography variant="body2" color="textPrimary" component="h4">{topic.description}</Typography>
      </CardContent>
      <CardMedia className={classes.media} image={topic.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={topic.title} />
      <CardActions className={classes.cardActions}>
        <Typography gutterBottom variant="body" color="textSecondary" component="h4">Estimated Duration: {topic.time} mins</Typography>
      </CardActions>
    </Card>
  );
};

export default Topic;