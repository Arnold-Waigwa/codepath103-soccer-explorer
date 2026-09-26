import express from "express";
import path from "path";
import { pool } from "../config/database.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM soccer_explorer ORDER BY id ASC`,
    );
    res.send(result.rows);
  } catch (error) {
    console.log("Error getting pitches", error);
    res.status(500).send("Unable to get pitches");
  }
});

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0)
    return res.status(400).send("Invalid pitch id");

  const values = [id];

  try {
    const result = await pool.query(
      `SELECT * FROM soccer_explorer WHERE id=$1`,
      values,
    );
    if (result.rows.length === 0) {
      return res
        .status(404)
        .sendFile(path.resolve(__dirname, "../public/404.html"));
    }
    res.send(result.rows[0]);
  } catch (error) {
    console.log("Error getting pitch", error);
    res.status(500).send("Error getting pitch", error);
  }
});

export default router;
