import express from "express";
import dotenv from "./config/dotenv.js";
import path from "path";
import { fileURLToPath } from "url";
import soccerPitches from "./routes/pitches.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, "./public")));
app.use("/pitches", soccerPitches);

app.use((req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, "./public/404.html"));
});

app.listen(PORT, () => console.log(`Successfully connected on port ${PORT}`));

// /api/pitches/id
