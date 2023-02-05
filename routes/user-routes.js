import { postUsers } from '../controllers/user-controller.js';

import express from 'express';
const router = express.Router();

router.get('/', function(req, res){
  res.json({message: 'get users'})
})
router.post('/', postUsers);

export default router;
