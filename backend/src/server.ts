import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { processImage } from './controllers/imageController';

const app = express();

// Enable CORS
app.use(cors());

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('image'), processImage);

app.listen(3001, () => {
    console.log('Backend server is running on port 3001');
});
