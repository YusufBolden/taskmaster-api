import express from 'express';
import { registerUser, loginUser } from '../../controllers/authController.js';
import User from '../../models/User.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});


export default router;
