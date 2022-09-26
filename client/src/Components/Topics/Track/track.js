import React from 'react';
import './track.css';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deleteTopic } from '../../../actions/actions';

const Track = ({topic, setCurrentId}) => {
    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{topic.title}</h3>
                <p>{topic.time}mins</p>
            </div>
            <Button style={{ color: 'black' }} size="small" onClick={() => setCurrentId(topic._id)}><MoreHorizIcon fontSize="default" /></Button>
        </div>
    )
}

export default Track;