import Task from '../models/Task.js';
import Project from '../models/Project.js';

export const createTask = async (req, res) => {
  const { title, description, status } = req.body;
  const { projectId } = req.params;

  const project = await Project.findById(projectId);
  if (!project || project.user.toString() !== req.user.id) {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  const task = await Task.create({ title, description, status, project: projectId });
  res.status(201).json(task);
};

export const getTasks = async (req, res) => {
  const { projectId } = req.params;
  const project = await Project.findById(projectId);
  if (!project || project.user.toString() !== req.user.id) {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  const tasks = await Task.find({ project: projectId });
  res.json(tasks);
};

export const updateTask = async (req, res) => {
  const { taskId } = req.params;
  const task = await Task.findById(taskId).populate('project');

  if (!task || task.project.user.toString() !== req.user.id) {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  const { title, description, status } = req.body;
  task.title = title || task.title;
  task.description = description || task.description;
  task.status = status || task.status;
  await task.save();

  res.json(task);
};

export const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  const task = await Task.findById(taskId).populate('project');

  if (!task || task.project.user.toString() !== req.user.id) {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  await task.deleteOne();
  res.json({ message: 'Task deleted' });
};
