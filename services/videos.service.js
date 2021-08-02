import VideoRepository from '../repositories/video.repository.js';
import VideoInfoRepository from '../repositories/videoInfo.repository.js';

// Service Layer: Business Rules

function getVideos() {
	return VideoRepository.getVideos();
}

async function getVideo(id) {
	const video = await VideoRepository.getVideo(id);
	if (video) {
		video.info = await VideoInfoRepository.getVideoInfo(parseInt(id));
	}

	return video;
}

function createVideo(video) {
	return VideoRepository.insertVideo(video);
}

function updateVideo(video) {
	return VideoRepository.updateVideo(video);
}

async function deleteVideo(id) {
	await VideoInfoRepository.deleteVideoInfo(parseInt(id));
	return VideoRepository.deleteVideo(id);
}

function getVideoInfo(id) {
	return VideoInfoRepository.getVideoInfo(id);
}

function getVideosInfo() {
	return VideoInfoRepository.getVideosInfo();
}

function createVideoInfo(videoInfo) {
	return VideoInfoRepository.createVideoInfo(videoInfo);
}

function updateVideoInfo(videoInfo) {
	return VideoInfoRepository.updateVideoInfo(videoInfo);
}

export default {
	getVideos,
	getVideo,
	createVideo,
	updateVideo,
	deleteVideo,
	getVideosInfo,
	getVideoInfo,
	createVideoInfo,
	updateVideoInfo,
};
