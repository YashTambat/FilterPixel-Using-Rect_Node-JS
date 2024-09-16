import { Router } from 'express';
import upload from '../middlewares/uploadMiddleware';
import { uploadImage, processImage } from '../controllers/imageController';

const router = Router();

// Upload image route
router.post('/upload', upload.single('image'), uploadImage);

// Process image route
router.post('/process', upload.single('image'), processImage);

export default router;
