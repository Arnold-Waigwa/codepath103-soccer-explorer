import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import soccerPitches from "./routes/pitches.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, "./public")));
app.use("/pitches", soccerPitches);

app.listen(PORT, () => console.log(`Successfully connected on port ${PORT}`));
