import VideoService from '../services/videos.service.js';

async function getVideos(req, res, next) {
    try{
        const resMessage = await VideoService.getVideos();
        res.status(200).send(resMessage);
    } catch (err) {
        next(err);
    }
}
async function getVideo (req, res, next) {
    try{
        const id = req.params.id;
        if (!id) {
            throw new Error('ID is a required url param!');
        }
        const resMessage = await VideoService.getVideo(id);
        res.status(200).send(resMessage);
    } catch (err) {
        next(err);
    }
}
async function createVideo(req, res, next) {
    try{
        const video = req.body;
        if (!video.title || !video.description || !video.url) {
            throw new Error('Title, Description and URL are required fields!');
        }
        await VideoService.createVideo(video);
        const resMessage = `Successfully created!`
        res.status(200).send(resMessage);
    } catch (err) {
        next(err);
    }
}
async function updateVideo (req, res, next) {
    try{
        const video = req.body;
        if (!video.videoId || !video.title || !video.description || !video.url) {
            throw new Error('ID, Title, Description and URL are required fields!');
        }
        await VideoService.updateVideo(video);
        const resMessage = `Successfully updated!`
        res.status(200).send(resMessage);
    } catch (err) {
        next(err);
    }
}
async function deleteVideo (req, res, next) {
    try{
        const id = req.params.id;
        if (!id) {
            throw new Error('ID is a required url param!');
        }
        await VideoService.deleteVideo(id);
        const resMessage = `Successfully deleted!`;
        res.status(200).send(resMessage);
    } catch (err) {
        next(err);
    }
}
async function getVideosInfo (req, res, next) {
    try {
        res.status(200).send(await VideoService.getVideosInfo());
    } catch (err) {
        next(err);
    }
}

async function createVideoInfo (req, res ,next) {
    try {
        const videoInfo = req.body;
        if (!videoInfo.videoId) {
            throw new Error(`Video ID is a required field.`);
        }
        await VideoService.createVideoInfo(videoInfo);
        res.status(200).send(`Successfully created!`);
    } catch (err) {
        next(err);
    }
}
async function updateVideoInfo (req, res ,next) {
    try {
        const videoInfo = req.body;
        if (!videoInfo.videoId) {
            throw new Error(`Video ID is a required field.`);
        }
        await VideoService.updateVideoInfo(videoInfo);
        res.status(200).send(`Successfully updated!`);
    } catch (err) {
        next(err);
    }
}

export default{
    getVideos,
    getVideo,
    createVideo,
    updateVideo,
    deleteVideo,
    getVideosInfo,
    createVideoInfo,
    updateVideoInfo
}