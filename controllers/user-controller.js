import { registerUser } from '../services/user-services.js';

async function postUsers(req, res) {
  try {
    const user = await registerUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

export { postUsers };
