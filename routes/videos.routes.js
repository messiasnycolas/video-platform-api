import Router from 'express';
import VideoController from '../controllers/videos.controller.js';

const router = Router();

router.get('/', VideoController.getVideos);
router.get('/info', VideoController.getVideosInfo);
router.get('/:id', VideoController.getVideo);
router.post('/', VideoController.createVideo);
router.post('/info', VideoController.createVideoInfo);
router.put('/', VideoController.updateVideo);
router.put('/info', VideoController.updateVideoInfo);
router.delete('/:id', VideoController.deleteVideo);

export default router;