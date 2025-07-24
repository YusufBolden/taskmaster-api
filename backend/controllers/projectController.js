import Project from '../models/Project.js';

export const createProject = async (req, res) => {
  const { name, description } = req.body;
  try {
    const project = await Project.create({ name, description, user: req.user.id });
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getProjects = async (req, res) => {
  const projects = await Project.find({ user: req.user.id });
  res.json(projects);
};

export const getProjectById = async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project || project.user.toString() !== req.user.id) {
    return res.status(403).json({ message: 'Access denied' });
  }
  res.json(project);
};

export const updateProject = async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project || project.user.toString() !== req.user.id) {
    return res.status(403).json({ message: 'Access denied' });
  }
  const { name, description } = req.body;
  project.name = name || project.name;
  project.description = description || project.description;
  await project.save();
  res.json(project);
};

export const deleteProject = async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project || project.user.toString() !== req.user.id) {
    return res.status(403).json({ message: 'Access denied' });
  }
  await project.deleteOne();
  res.json({ message: 'Project removed' });
};
