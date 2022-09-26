import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './formStyle';
import { createTopic, updateTopic } from '../../actions/actions';


const Form = ({ currentId, setCurrentId, handleClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const topic = useSelector((state) => (currentId ? state.topics.find((t) => t._id === currentId) : null));
  const [topicData, setTopicData] = useState({ 
    title: '',
    time: 30,
    description: '', 
    selectedFile: ''
  });

  useEffect(() => {
    if(topic) {
      setTopicData(topic);
    }
  }, [topic])
  
  const clear = () => {
    setCurrentId(null);
    setTopicData({
      title: '',
      time: 30,
      description: '', 
      selectedFile: ''
    })
  };


  const handleTime = (e) => {
    let value = parseInt(e.target.value, 10);
    if (value > 60) value = 60;
    if (value < 0) value = 0;
    setTopicData({ ...topicData, time: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateTopic(currentId, topicData));
    }
    else {
      dispatch(createTopic(topicData));
    }
    clear();
    handleClose();
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing Topic` : 'Creating a New Topic'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={topicData.title} onChange={(e) => setTopicData({ ...topicData, title: e.target.value })} />
        <TextField name="time" variant="outlined" label="Time Estimate" type="number" inputProps={{ min: 0, max: 60 }} value={topicData.time} fullWidth onChange={handleTime} />
        <TextField name="description" variant="outlined" label="Description" fullWidth multiline rows={4} value={topicData.description} onChange={(e) => setTopicData({ ...topicData, description: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setTopicData({ ...topicData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        <Button variant="contained" color="error" size="small" onClick={handleClose} fullWidth>Close</Button>
      </form>
    </Paper>
  );
};

export default Form;