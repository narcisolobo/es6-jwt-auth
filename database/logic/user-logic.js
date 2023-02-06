import DatabaseError from '../../errors/db-error.js';
import User from '../models/user-model.js';

async function createUser(user) {
  try {
    return await User.create(user);
  } catch (err) {
    throw new DatabaseError(err);
  }
}

async function findUserByEmail(email) {
  try {
    return await User.findOne({ email });
  } catch (err) {
    throw Error({ err, message: 'User not found.' });
  }
}

async function checkPassword(user, password) {}

export { createUser, findUserByEmail };
