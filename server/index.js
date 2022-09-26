import express from 'express';
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';
import { createServer } from "http";
import { Server } from "socket.io";
import topicsRoutes from './routes/topics.js';


const app = express();
const mongoDB_URL = 'mongodb+srv://surfboard:surfboard123@cluster0.dr59dqp.mongodb.net/?retryWrites=true&w=majority'
const PORT = 5000;
const PORT2 = 5001;

app.use(cors());

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use('/topics', topicsRoutes);

const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
        method: ['GET', 'POST']
    }
})

app.get('/', (req, res) => {
    res.send('Server is running');
});

io.on("connection", (socket) => {
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
});
server.listen(PORT2, () => console.log(`Server listening on port ${PORT2}`));

mongoose.connect(mongoDB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));
