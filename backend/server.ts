import cors from "cors"; // CORS 추가
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import multer from "multer";
import path from "path";
import { Pool } from "pg";

dotenv.config({ path: __dirname + "/../.env" });

console.log("Database password:", process.env.PG_PASSWORD);

const app = express();
const port = 5000;

// CORS 설정
app.use(cors({ origin: "http://localhost:3000" })); // 특정 출처 허용 (프론트엔드 서버)

app.use(express.json());

// 이미지 업로드 경로 및 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // 'uploads' 폴더에 저장
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // 파일명을 고유하게 설정
  },
});

const upload = multer({ storage });

// 정적 파일 제공 설정 (업로드된 파일을 제공하기 위해)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// PostgreSQL 연결 설정
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT),
});

// 프로젝트 생성 API (POST /api/projects)
app.post("/api/projects", async (req, res) => {
  const { title, description, imageUrl } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO projects (title, description, image_url) VALUES ($1, $2, $3) RETURNING *",
      [title, description, imageUrl]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// 이미지 업로드 API (POST /api/upload)
app.post(
  "/api/upload",
  upload.single("image"),
  (req: Request, res: Response): void => {
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
  }
);

app.get("/api/projects", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM projects");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).send("Server error");
  }
});

// 특정 프로젝트 조회 API (GET /api/projects/:id)
app.get("/api/projects/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM projects WHERE id = $1", [
      id,
    ]);
    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).send("Project not found");
    }
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).send("Server error");
  }
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
