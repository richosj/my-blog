import express from "express";
import { uploadImage, uploadMiddleware } from "../controllers/uploadController";

const router = express.Router();

// 이미지 업로드 API 라우트
router.post("/", uploadMiddleware, uploadImage);

export default router;
