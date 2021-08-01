import { getClient } from './mongo.db.js';

async function getVideosInfo() {
    const client = getClient();
    try {
        await client.connect();
        return await client.db("video-platform").collection("video-info").find({}).toArray();
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }
}

async function getVideoInfo(videoId) {
    const client = getClient();
    try {
        await client.connect();
        return await client.db("video-platform").collection("video-info").findOne({videoId: videoId});
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }
}

async function createVideoInfo(videoInfo) {
    const client = getClient();
    try {
        await client.connect();
        await client.db("video-platform").collection("video-info").insertOne(videoInfo);
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }
}

async function updateVideoInfo(videoInfo) {
    const client = getClient();
    try {
        await client.connect();
        await client.db("video-platform")
        .collection("video-info")
        .updateOne(
            {videoId: videoInfo.videoId},
            {$set: {...videoInfo}}
        );
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }
}

async function deleteVideoInfo(videoId) {
    const client = getClient();
    try {
        await client.connect();
        return await client.db("video-platform").collection("video-info").deleteOne({videoId: videoId});
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }
}
export default { getVideosInfo, getVideoInfo, createVideoInfo, updateVideoInfo, deleteVideoInfo };