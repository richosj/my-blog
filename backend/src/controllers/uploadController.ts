import { Request, Response } from "express";
import multer, { StorageEngine } from "multer";

// 이미지 업로드 경로 및 설정
const storage: StorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // 'uploads' 폴더에 저장
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // 파일명을 고유하게 설정
  },
});

const upload = multer({ storage });

// 이미지 업로드 처리 함수
export const uploadImage = (req: Request, res: Response): void => {
  try {
    if (!req.file) {
      res.status(400).send("No file uploaded");
      return;
    }

    // 업로드된 파일 경로를 반환
    res.status(200).json({ imageUrl: `/uploads/${req.file.filename}` });
  } catch (err) {
    console.error("Error uploading file:", err);
    res.status(500).send("Server error");
  }
};

export const uploadMiddleware = upload.single("image");
