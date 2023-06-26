const { getTasks, createTask, deleteTask, updateTask, getTasksCounts, getTaskById } = require('../controllers/tasks.controller');

const router = require('express').Router();

router.get('/', getTasks);
router.get('/:id', getTaskById);
router.get('/count', getTasksCounts);
router.post('/', createTask);
router.put('/', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;