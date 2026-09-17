import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import pitches from "../data/pitches.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
  res.json(pitches);
});

router.get("/:id", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/pitch.html"));
});

export default router;
