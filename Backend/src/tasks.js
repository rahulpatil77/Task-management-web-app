import db from './db.js'

// Get all tasks
const getAllTasks = async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM tasks")
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

//get task by id 
const getTaskByID = async (req, res) => {
    const taskId = req.params.id
    try {
        const result = await db.query("SELECT * FROM tasks WHERE id = $1 ",[taskId])
        res.json(result.rows)
    } catch (error) {
        res.status(404).json({message: "Task not found"})
    }
}

//add task 
const addTask = async (req, res) => {
    const { description } = req.body
    try {
        const result = await db.query(
            "INSERT INTO tasks (description) VALUES($1) RETURNING *", [ description])
        res.status(200).json(result.rows[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal server error"})
    }
}

//update task
const updateTask = async (req, res) => {
    const taskId = req.params.id
    console.log(req.body)
    const { description, iscomplete } = req.body
    
    try {
        const result = await db.query(
            'UPDATE tasks SET description = $1, iscomplete = $2 WHERE id = $3  RETURNING *',[description, iscomplete, taskId]
        )
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Task not found' })
        }
        res.json(result.rows[0])
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

// Delete a task by ID
const deleteTask = async (req, res) => {
    const taskId = req.params.id;
  
    try {
        const result = await db.query(
            'DELETE FROM tasks WHERE id = $1 RETURNING *',
            [taskId]
      )

      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Task not found' });
      }
      
      res.json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
}

export {getAllTasks, getTaskByID, addTask, updateTask, deleteTask}