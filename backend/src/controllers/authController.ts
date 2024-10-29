import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { PoolClient } from "pg";
import pool from "../db/pool";

// 회원가입 컨트롤러
export const registerUser = async (req: Request, res: Response) => {
  try {
    const {
      name,
      position,
      email,
      contact,
      role,
      department,
      team,
      company,
      password,
    } = req.body;

    // 필수 입력값 확인
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "이름, 이메일, 비밀번호는 필수입니다." });
    }

    // 이메일 중복 확인
    const emailCheckQuery = "SELECT * FROM members WHERE email = $1";
    const emailCheckResult = await pool.query(emailCheckQuery, [email]);
    if (emailCheckResult.rows.length > 0) {
      return res.status(400).json({ message: "이미 사용 중인 이메일입니다." });
    }

    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    // 회원 정보 저장 쿼리
    const insertQuery = `
      INSERT INTO members (name, position, email, contact, role, department, team, company, avatar_url, created_at, password)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, '', NOW(), $9)
      RETURNING id
    `;
    const values = [
      name,
      position,
      email,
      contact,
      role,
      department,
      team,
      company,
      hashedPassword,
    ];
    const result = await pool.query(insertQuery, values);

    // 회원 가입 성공
    res.status(201).json({
      message: "회원 가입이 완료되었습니다.",
      userId: result.rows[0].id,
    });
  } catch (error) {
    console.error("회원가입 중 오류 발생:", error);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
};

type User = {
  id: number;
  email: string;
  role: string;
  password: string;
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  let client: PoolClient | null = null;
  try {
    client = await pool.connect();
    const result = await client.query(
      "SELECT * FROM members WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      res
        .status(404)
        .json({ message: "해당 이메일로 등록된 사용자가 없습니다." });
      return;
    }

    const user: User = result.rows[0];
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });
      return;
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      "your_jwt_secret_key",
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (err) {
    console.error("로그인 중 오류 발생:", err);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  } finally {
    if (client) {
      client.release();
    }
  }
};

export const logoutUser = (req: Request, res: Response): void => {
  // 클라이언트 측에서는 토큰을 삭제하여 로그아웃 처리
  res.status(200).json({ message: "로그아웃되었습니다." });
};
