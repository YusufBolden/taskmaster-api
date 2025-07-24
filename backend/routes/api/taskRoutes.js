import express from 'express';
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} from '../../controllers/taskController.js';
import { protect } from '../../utils/authMiddleware.js';

const router = express.Router();

// Nested under projects
router.route('/:projectId/tasks')
  .post(protect, createTask)
  .get(protect, getTasks);

router.route('/tasks/:taskId')
  .put(protect, updateTask)
  .delete(protect, deleteTask);

export default router;
