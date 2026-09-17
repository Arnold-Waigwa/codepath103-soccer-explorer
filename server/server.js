import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import soccerRouter from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, "../client/public")));

app.use("/", soccerRouter);

app.listen(PORT, () => console.log(`Successfully connected on port ${PORT}`));
