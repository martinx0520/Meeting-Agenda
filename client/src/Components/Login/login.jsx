import React, { useState } from 'react';
import useStyles from './loginStyle';
import { TextField, Button, Typography, Paper } from '@material-ui/core';


const Login = ({ loginClose, setPresenter }) => {
    const classes = useStyles();
    const [loginInfo, setLoginInfo] = useState({ 
        username: '',
        password: ''
    });

    const clear = () => {
        setLoginInfo({
            username: '',
            password: ''
        })
    };

    const handleSubmit =  (e) => {
        e.preventDefault();
        if (loginInfo.username === 'admin' && loginInfo.password === 'password') {
            setPresenter(true);
        }
        clear();
        loginClose();
      };

    return (
        <Paper className={classes.paper}>
          <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{'Login as Presenter'}</Typography>
            <TextField name="Username" variant="outlined" label="Username" fullWidth value={loginInfo.username} onChange={(e) => setLoginInfo({ ...loginInfo, username: e.target.value })} />
            <TextField name="Password" variant="outlined" label="Password" type='password' fullWidth value={loginInfo.password} onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })} />
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            <Button variant="contained" color="error" size="small" onClick={loginClose} fullWidth>Close</Button>
          </form>
        </Paper>
      );
}

export default Login;