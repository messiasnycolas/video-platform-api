import { getClient } from './mongo.db.js';

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

export default { createVideoInfo }