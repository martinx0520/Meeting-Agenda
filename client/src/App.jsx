import React, {useState, useEffect} from 'react';
import { Container, AppBar, Typography, Button, Grow, Grid } from '@material-ui/core';
import { List, Modal } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { getTopics } from './actions/actions'
import Form from './Components/Form/form'
import Topics from './Components/Topics/topics'
import Topic from './Components/Topics/Topic/topic'
import VideoPlayer from './Components/VideoChat/VideoPlayer';
import Notifications from './Components/VideoChat/notification';
import Sidebar from './Components/VideoChat/sidebar';
import Timer from './Components/Timer';
import Login from './Components/Login/login';

import useStyles from './AppStyle'

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const [open, setOpen] = useState(false);
  const [topicDetail, setTopicDetail] = useState(null);
  const [presenter, setPresenter] = useState(false);
  const [login, setLogin] = useState(false);
  const topics = useSelector((state) => state.topics);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setCurrentId(null);
  }
  const loginOpen = () => setLogin(true);
  const loginClose = () => {
    setLogin(false);
  }
  useEffect(() => {
    dispatch(getTopics());
  }, [currentId, dispatch])

  return (
      <>
        <div>
          <AppBar className={classes.videochatBar} position='static' color='inherit'>
            <Typography variant='h3' align='center'> Investor Meeting</Typography>
          </AppBar>
          <Container className={classes.container} maxWidth='lg'>
            {topicDetail ? <Topic topic={topicDetail} setCurrentId={setCurrentId} setTopicDetail={setTopicDetail} /> :
            <div className={classes.listContainer}>
              <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h3' align='left'>Meeting Topics</Typography>
                {presenter && <Button className={classes.button} color='primary' variant='h4' align='right' onClick={handleOpen}>Create Topic</Button>}
                <Button className={classes.button} color='secondary' variant='h4' align='right' onClick={loginOpen}>{presenter ? 'Logged In' : 'Presenter Login'}</Button>
                <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                  <Form handleClose={handleClose} currentId={currentId} setCurrentId={setCurrentId}/>
                </Modal>
                <Modal open={login} onClose={loginClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                  <Login loginClose={loginClose} setPresenter={setPresenter} />
                </Modal>
              </AppBar>
              <div>
                <Grow in>
                  <Container>
                    <List sx={{ width: '100%', bgcolor: 'rgba(255, 255, 255, 0)' }}>
                      <Topics handleOpen={handleOpen} setCurrentId={setCurrentId} setTopicDetail={setTopicDetail} presenter={presenter} />
                    </List>
                  </Container>
                </Grow>
              </div>
            </div>}
          </Container>
          <VideoPlayer />
          <Sidebar>
            <Notifications />
          </Sidebar>
          <AppBar className={classes.timeBar} position='static' color='inherit'>
            <Timer topics={topics} />
          </AppBar>
        </div>
      </>
      
  )
}

export default App