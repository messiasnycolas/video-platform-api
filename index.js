import express from 'express';
import VideoRouter from './routes/videos.routes.js';

const app = express();
global.port = 3000;
app.use(express.json());
app.use('/', VideoRouter);
app.listen(global.port, () => {
	console.log(`Server up! Listening on port ${global.port}`);
});
