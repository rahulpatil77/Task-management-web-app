// src/db/db.js
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "tasks",
  password: "rahul@1580",
  port: 5432
});

const connectToDatabase = async () => {
  try {
    await db.connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export { connectToDatabase }
export default db
