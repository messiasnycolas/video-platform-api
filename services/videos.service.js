import VideoRepository from '../repositories/videos.repository.js';

// Service Layer: Business Rules 

async function getVideos() {
    return await VideoRepository.getVideos();
}
async function getVideo(id) {
    return await VideoRepository.getVideo(id);
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

export default {
    getVideos,
    getVideo,
    createVideo,
    updateVideo,
    deleteVideo
}