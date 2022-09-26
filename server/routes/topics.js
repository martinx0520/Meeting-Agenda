import express from 'express';

import { getTopics, getTopic, createTopic, updateTopic, deleteTopic } from '../controller/topicsHandler.js';
const router = express.Router();

router.get('/', getTopics);
router.post('/', createTopic);
router.get('/:id', getTopic);
router.patch('/:id', updateTopic);
router.delete('/:id', deleteTopic);

export default router;