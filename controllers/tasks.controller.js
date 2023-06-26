const { uuid } = require('uuidv4');
const TaskModel = require('../models/task.model');
const { Op } = require('sequelize');

const createTask = async (req, res) => {

    const { title } = req.body;

    if (!title) {
        const error = new Error('Title is missing.');
        return res.status(403).json(error);
    }

    const newTask = {
        id: uuid(),
        title,
    };

    try {

        const createdTask = await TaskModel.create(newTask);
        res.status(201).json(createdTask);

    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

const getTasks = async (req, res) => {

    const { isDone, search } = req.query;
	
    const isDoneFilter = typeof isDone === 'undefined' ? {} : { isDone: isDone === 'true' };
    const searchFilter = typeof search === 'undefined' ? {} : { title: { [ Op.like ]: `%${ search }%` } };

    try {
        const tasks = await TaskModel.findAndCountAll({
            where: {
                ...isDoneFilter,
                ...searchFilter,
            },
        });
        res.status(200).json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }

};

const updateTask = async (req, res) => {
    const { id, ...taskToUpdate } = req.body; 
    try {
        const updatedTask = await TaskModel.update(taskToUpdate, {
            where: {
                id,
            },
        });
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params; 
    try {
        const deletedTask = await TaskModel.destroy({
            where: {
                id,
            },
        });
        res.status(200).json(deletedTask);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getTasksCounts = async (req, res) => {
    try {
        const todoTasks = await TaskModel.findAndCountAll({ where: {
            isDone: false,
        } });
        const completedTasks = await TaskModel.findAndCountAll({ where: {
            isDone: true,
        } });
        res.status(200).json({
            todoTasksCount: todoTasks.count,
            completedTasksCount: completedTasks.count,
            allTasksCount: todoTasks.count + completedTasks.count,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
    getTasksCounts,
};