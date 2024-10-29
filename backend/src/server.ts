import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import authRoutes from "./routes/authRoutes";
import projectRoutes from "./routes/projectRoutes"; // 프로젝트 라우트 임포트
import uploadRoutes from "./routes/uploadRoutes"; // 업로드 라우트 임포트

// 환경 변수 설정 로드
dotenv.config({ path: __dirname + "/../.env" });

const app = express();
const port = process.env.PORT || 5000;

// CORS 설정
app.use(cors({ origin: "http://localhost:3000" }));

// 정적 파일 제공 설정
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use(express.json());

// 라우트 등록
app.use("/api/projects", projectRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/auth", authRoutes);

// 서버 실행
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
