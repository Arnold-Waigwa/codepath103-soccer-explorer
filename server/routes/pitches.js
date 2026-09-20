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
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || !pitches.some((pitch) => pitch.id === id)) {
    res.status(404).sendFile(path.resolve(__dirname, "../public/404.html"));
    return;
  }
  res.sendFile(path.resolve(__dirname, "../public/pitch.html"));
});

export default router;
