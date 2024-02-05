import express from "express";
import bodyParser from "body-parser";
import { connectToDatabase } from "./db.js";
import cors from "cors"
import { getAllTasks, getTaskByID, addTask, updateTask, deleteTask } from './tasks.js';


const app = express();
const port = 3500;

connectToDatabase();

app.use(cors())
app.use(bodyParser.json());

// Tasks routes
app.get("/tasks", getAllTasks);
app.get("/tasks/:id", getTaskByID);
app.post("/tasks", addTask);
app.put("/tasks/:id", updateTask);
app.delete("/tasks/:id", deleteTask);

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
