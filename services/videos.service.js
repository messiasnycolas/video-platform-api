import VideoRepository from '../repositories/video.repository.js';
import VideoInfoRepository from '../repositories/videoInfo.repository.js';

// Service Layer: Business Rules 

async function getVideos() {
    return await VideoRepository.getVideos();
}
async function getVideo(id) {
    const video = await VideoRepository.getVideo(id);
    if (video)
    video.info = await VideoInfoRepository.getVideoInfo(parseInt(id));
    return video;
}
async function createVideo(video) {
    return await VideoRepository.insertVideo(video);
}
async function updateVideo(video) {
    return await VideoRepository.updateVideo(video);
}
async function deleteVideo(id) {
    return await VideoRepository.deleteVideo(id);
}
async function createVideoInfo(videoInfo) {
    return await VideoInfoRepository.createVideoInfo(videoInfo);
}
async function updateVideoInfo(videoInfo) {
    return await VideoInfoRepository.updateVideoInfo(videoInfo);
}

export default {
    getVideos,
    getVideo,
    createVideo,
    updateVideo,
    deleteVideo,
    createVideoInfo,
    updateVideoInfo
}