
# Task Management Web App

This Task Manager web app allows users to manage their tasks efficiently. It uses PostgreSQL as the database, Express and Node.js for the backend, and React for the frontend.


## Installation

Clone the repository:
```bash
git clone https://github.com/your-username/task-manager-web-app.git

```
Navigate to the project directory:
```bash
cd task-manager-web-app
```

Database Setup:

Install pgAdmin and create a new database.

Execute the SQL queries provided in database.sql to create the necessary table.

Navigate to the frontend directory:
```
cd frontend
```
Install frontend dependencies:
```
npm install
```
Start the frontend:
```
npm Start
```
Navigate to the backend directory:
```
cd backend
```
Install backend dependencies:
```
npm install
```
Start the backend:
```
npm Start
```
    
## API Reference

#### Get all tasks

```http
  GET http://localhost:3500/tasks
```
sample output:
```json
Endpoint: GET http://localhost:3500/tasks
[
    {
        "id": 1,
        "description": "GYM at 6:30"
    },
    {
        "id": 2,
        "description": "Study"
    }
]
```


#### Get single task by ID

```http
  GET http://localhost:3500/tasks/:id
```
| Parameter | 
| :-------- |
| `id`      |

sample output:
```json
Endpoint: GET http://localhost:3500/tasks/2
[
    {
        "id": 2,
        "description": "Study"
    }
]
```
#### Add a new task

```http
  POST http://localhost:3500/tasks
```
sample output:
```json
Endpoint: POST http://localhost:3500/tasks
response:
[
    {
        "id": 4,
        "description": "walking"
    }
]
```
#### Update details of a specific task by ID.


```http
  PUT http://localhost:3500/tasks/:id
```
| Parameter | 
| :-------- |
| `id`      |

sample output:
```json
Endpoint: PUT http://localhost:3500/tasks/4
response:
[
    {
        "id": 2,
        "description": "running"
    }
]
```
####  Delete a task by ID..

```http
  DELETE http://localhost:3500/tasks/:id
```
| Parameter | 
| :-------- |
| `id`      |

sample output:
```json
Endpoint: DELETE http://localhost:3500/tasks/2
response:
{
    "message": "Task deleted successfully"
}

```

## Technologies Used
PostgreSQL
,Express
,Node.js
,React


