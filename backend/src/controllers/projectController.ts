import { Request, Response } from "express";
import pool from "../db/pool";

export const createProject = async (req: Request, res: Response) => {
  const {
    title,
    description,
    imageUrl,
    period,
    exeDate,
    role,
    link,
    technologies,
    summary,
  } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO projects (title, description, image_url, period, role, link, technologies, summary, execution_date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        title,
        description,
        imageUrl,
        period,
        role,
        link,
        technologies,
        summary,
        exeDate,
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const getProjects = async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM projects");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).send("Server error");
  }
};

export const fetchProjectById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM projects WHERE id = $1", [
      id,
    ]);
    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).send("Project not found");
    }
  } catch (err) {
    console.error("Error fetching project details:", err);
    res.status(500).send("Server error");
  }
};
