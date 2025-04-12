import path from 'path';
import { Request, Response } from 'express';

export const showFile = (req: Request, res: Response): void => {
  const fileName = '11.pdf';
  const fullPath = path.join(process.cwd(), 'src', 'public', 'files', fileName);  
  res.sendFile(fullPath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(404).json({
        success: false,
        message: 'File not found',
        path: fullPath
      });
    }
  });
};

export const downloadFile = (req: Request, res: Response): void => {
  const fileName = '11.pdf';
  const fullPath = path.join(process.cwd(), 'src', 'public', 'files', fileName);
  
  console.log("Attempting to download file from:", fullPath);
  
  res.download(fullPath, fileName, (err) => {
    if (err) {
      console.error('Error downloading file:', err);
      res.status(404).json({
        success: false,
        message: 'File not found',
        path: fullPath
      });
    }
  });
};
export const renderView = (req: Request, res: Response): void => {
  res.render('download', { showHeaderFooter: true });
};