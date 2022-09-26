import axios from 'axios';

const url = 'http://localhost:5000/topics';

export const fetchTopic = () => axios.get(url);
export const createTopic = (newTopic) => axios.post(url, newTopic);
export const updateTopic = (id, updatedTopic) => axios.patch(`${url}/${id}`, updatedTopic);
export const deleteTopic = (id) => axios.delete(`${url}/${id}`);