import { CircularProgress } from '@material-ui/core';
import { ListItem, ListItemText, ListItemAvatar, Avatar, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTopic, updateTopic } from '../../actions/actions';

import useStyles from './topicsStyle';
import Topic from './Topic/topic'

const Topics = ({ handleOpen, setCurrentId, setTopicDetail, presenter }) => {
  const topics = useSelector((state) => state.topics);
  const dispatch = useDispatch();
  const classes = useStyles();

  const EditPost = (id) => {
    setCurrentId(id);
    handleOpen();
  }

  return (
    !topics.length ? <CircularProgress /> : (
      <div>
        {topics.map((topic) => (
          <ListItem sx={{ bgcolor: 'rgba(255, 255, 255, 1)', borderRadius: 5, margin: '5px'}} divider>
            <ListItemAvatar >
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={topic.title} secondary={topic.time + ' mins'} />
            {presenter && 
              <>
                <IconButton edge="end" aria-label="Edit" onClick={() => EditPost(topic._id)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => dispatch(deleteTopic(topic._id))}>
                  <DeleteIcon />
                </IconButton>
              </>
            }
            <IconButton edge="end" aria-label="view" onClick={() => setTopicDetail(topic)}>
              <InfoIcon />
            </IconButton>
          </ListItem>
          
        ))}
      </div>
    )
  )
}

export default Topics;