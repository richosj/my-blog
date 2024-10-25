import express from "express";
import {
  createProject,
  fetchProjectById,
  getProjects,
} from "../controllers/projectController";

const router = express.Router();

router.post("/", createProject);
router.get("/", getProjects);
router.get("/:id", fetchProjectById);

export default router;
