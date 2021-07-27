import Video from '../models/videos.models.js';

async function getVideos() {
    try {
        return await Video.findAll();
    } catch (err) {
        throw err;
    }
}

async function getVideo(id) {
    try {
        return await Video.findByPk(id, { raw: true });
    } catch (err) {
        throw err;
    }
}

async function insertVideo(video) {
    try {
        await Video.create(video);
    } catch (err) {
        throw err;
    }
}

async function updateVideo(video) {
    try {
        await Video.update(video, {
           where: {
                videoId: video.videoId 
            }
        });
    } catch (err) {
        throw err;
    }
}

async function deleteVideo(id) {
    try {
        Video.destroy({
            where: {
                videoId: id
            }
        })
    } catch (err) {
        throw err;
    }
}

export default {
    getVideos,
    getVideo,
    insertVideo,
    updateVideo,
    deleteVideo
}