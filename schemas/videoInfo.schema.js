import mongoose from 'mongoose';

const VideoInfoSchema = new mongoose.Schema(
	{
		videoId: Number,
		category: String,
		likes: Number,
		dislikes: Number,
		comments: Array,
	}, {collection: 'video-info', versionKey: false},
);

export {VideoInfoSchema};
