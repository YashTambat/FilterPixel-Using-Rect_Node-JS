import sharp from 'sharp';
import { Request, Response } from 'express';

// Existing code...

// Modify the image processing logic
export const processImage = async (req: Request, res: Response) => {
    const { brightness, contrast, saturation } = req.query;

    try {
        let image = sharp(req.file?.path);

        // Apply brightness
        if (brightness) image = image.modulate({ brightness: parseFloat(brightness as string) });

        // Apply saturation
        if (saturation) image = image.modulate({ saturation: parseFloat(saturation as string) });

        // Apply contrast using linear
        if (contrast) image = image.linear(parseFloat(contrast as string), 0);

        const processedImageBuffer = await image.toBuffer();

        res.set('Content-Type', 'image/jpeg');
        res.send(processedImageBuffer);
    } catch (error) {
        res.status(500).send({ error: 'Failed to process the image' });
    }
};
