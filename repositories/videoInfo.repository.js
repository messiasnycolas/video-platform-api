import { connect } from './mongo.db.js';
import { VideoInfoSchema } from '../schemas/videoInfo.schema.js';



async function getVideosInfo() {
    try {
        const mongoose = await connect();
        const VideoInfo = mongoose.model("video-platform", VideoInfoSchema, "video-info");
        return await VideoInfo.find({}).exec(); 
    } catch (err) {
        throw err;
    }
}

async function getVideoInfo(videoId) {
    try {
        const mongoose = await connect();
        const VideoInfo = mongoose.model("VideoInfo", VideoInfoSchema);
        return await VideoInfo.findOne({ videoId }).exec();
    } catch (err) {
        throw err;
    }
}

async function createVideoInfo(videoInfo) {
    try {
        const mongoose = await connect();
        const VideoInfo = mongoose.model("VideoInfo", VideoInfoSchema);
        const video = new VideoInfo(videoInfo);
        await video.save();
    } catch (err) {
        throw err;
    }
}

async function updateVideoInfo(videoInfo) {
    try {
        const mongoose = await connect();
        const VideoInfo = mongoose.model("videoInfo", VideoInfoSchema);
        await VideoInfo.findOneAndUpdate({ videoId: videoInfo.videoId }, videoInfo);
    } catch (err) {
        throw err;
    }
}

async function deleteVideoInfo(videoId) {
    try {
        const mongoose = await connect();
        const VideoInfo = mongoose.model("videoInfo", VideoInfoSchema);
        await VideoInfo.deleteOne({ videoId });
    } catch (err) {
        throw err;
    }
}

export default { getVideosInfo, getVideoInfo, createVideoInfo, updateVideoInfo, deleteVideoInfo };