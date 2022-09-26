import mongoose from "mongoose";

const topicSchema = mongoose.Schema({
    title: String,
    time: Number,
    description: String,
    selectedFile: String,
});

const TopicMessage = mongoose.model('topicMessage', topicSchema);
export default TopicMessage;