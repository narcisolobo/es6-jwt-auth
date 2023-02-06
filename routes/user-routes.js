import { postUsersRegister } from '../controllers/user-controller.js';

import express from 'express';
const router = express.Router();

router.get('/', function(req, res){
  res.json({message: 'get users'})
})
router.post('/register', postUsersRegister);

export default router;
