import { pool } from "../config/database.js";
import pitchData from "./pitches.js";

async function createPitchTable() {
  const createTableQuery = `
    DROP TABLE IF EXISTS soccer_explorer;

    CREATE TABLE soccer_explorer (
      id INT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price_point VARCHAR(3) NOT NULL,
      hourly_rate DECIMAL(5, 2) NOT NULL,
      audience VARCHAR(255) NOT NULL,
      image_url VARCHAR(512) NOT NULL,
      description TEXT NOT NULL,
      submitted_by VARCHAR(255) NOT NULL,
      submitted_on TIMESTAMPTZ DEFAULT NOW()
    );
  `;

  await pool.query(createTableQuery);
  console.log("Table was successfully created");
}

async function seedPitchTable() {
  try {
    await createPitchTable();

    const insertQuery = `
      INSERT INTO soccer_explorer (
        id, name, price_point, hourly_rate, audience,
        image_url, description, submitted_by, submitted_on
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);
    `;

    for (const pitch of pitchData) {
      const values = [
        pitch.id,
        pitch.name,
        pitch.pricePoint,
        pitch.hourlyRate,
        pitch.audience,
        pitch.image,
        pitch.description,
        pitch.submittedBy,
        pitch.submittedOn,
      ];

      await pool.query(insertQuery, values);
      console.log(`${pitch.name} added successfully`);
    }
  } catch (error) {
    console.error("Failed to seed pitches:", error);
    return;
  } finally {
    await pool.end();
  }
}

seedPitchTable();
