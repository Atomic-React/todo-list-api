const { getTasks, createTask, deleteTask, updateTask, getTasksCounts } = require('../controllers/tasks.controller');

const router = require('express').Router();

router.get('/', getTasks);
router.get('/count', getTasksCounts);
router.post('/', createTask);
router.put('/', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;