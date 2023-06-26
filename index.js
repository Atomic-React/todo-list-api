const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks.router');
const db = require('./config/database.config');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/tasks', tasksRouter);

db.sync().then(() => {
    console.log('Connected to database');
});

app.listen(PORT, () => {
    console.log(`Todo List API started on http://localhost:${ PORT }`);
});