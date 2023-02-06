import { registerUser } from '../services/user-services.js';

async function postUsersRegister(req, res) {
  try {
    const user = await registerUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

export { postUsersRegister };
