import multer from 'multer';
import path from 'path';

// Set up multer for file uploads
const storage = multer.memoryStorage(); // Store in memory for Sharp processing
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only images are allowed (JPEG/PNG)'));
    }
  }
});

export default upload;
