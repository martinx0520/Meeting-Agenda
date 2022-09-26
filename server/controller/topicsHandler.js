import express from 'express';
import mongoose from 'mongoose';

import TopicMessage from "../topicSchema.js";

const router = express.Router();

export const getTopics = async (req, res) => {
    try {
        const topicMessages = await TopicMessage.find();

        res.status(200).json(topicMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getTopic = async (req, res) => { 
    const { id } = req.params;
    try {
        const topic = await TopicMessage.findById(id);
        
        res.status(200).json(topic);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTopic = async (req, res) => {
    const topic = req.body;

    const newTopic = new TopicMessage(topic);

    try {
        await newTopic.save();

        res.status(201).json(newTopic);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateTopic = async (req, res) => {
    const { id } = req.params;
    const { title, time, description, selectedFile } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Topic with id: ${id}`);

    const updatedTopic = { title, time, description, selectedFile, _id: id };

    await TopicMessage.findByIdAndUpdate(id, updatedTopic, { new: true });

    res.json(updatedTopic);
}

export const deleteTopic = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No topic with id: ${id}`);

    await TopicMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export default router;