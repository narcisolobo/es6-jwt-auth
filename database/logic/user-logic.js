import User from '../models/user-model.js';

async function createUser(user) {
  try {
    return await User.create(user);
  } catch (err) {
    return err;
  }
}

async function findUserByEmail(email) {
  try {
    return await User.findOne({ email });
  } catch (err) {
    return err;
  }
}

async function checkPassword(user, password) {

}

export { createUser, findUserByEmail };
