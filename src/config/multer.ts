import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import { Request } from 'express';

export default {
  dest: path.resolve(__dirname, '..', '..', 'uploads'),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req: Request, file: any, cb: any) => {
      crypto.randomBytes(16, (err, hash) => {
        if(err) cb(err);
        const [name, ext] = file.originalname.split('.');
        const nameForDb = name.trim().normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
        const fileName = `${hash.toString('hex')}-${nameForDb}.${ext}`;

        cb(null, fileName);
      });
    },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req: Request, file: any, cb: any) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif',
      'image/jpg'
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  }
}