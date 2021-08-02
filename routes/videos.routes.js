import Router from 'express';
import VideoController from '../controllers/videos.controller.js';

const router = Router();

router.get('/info', VideoController.getVideosInfo);
router.get('/info/:id', VideoController.getVideoInfo);
router.get('/', VideoController.getVideos);
router.get('/:id', VideoController.getVideo);
router.post('/info', VideoController.createVideoInfo);
router.post('/', VideoController.createVideo);
router.put('/info', VideoController.updateVideoInfo);
router.put('/', VideoController.updateVideo);
router.delete('/:id', VideoController.deleteVideo);

export default router;
