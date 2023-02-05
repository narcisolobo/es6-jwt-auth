import { createUser, findUserByEmail } from "../database/logic/user-logic.js";

async function registerUser(user) {
  try {
    return await createUser(user);
  } catch (err) {
    return err;
  }
}

async function loginUser(email, password) {
  try {
    // find user in db
    const user = await findUserByEmail(email);

  } catch (err) {
    return err;
  }
}



// no user? return err
// user? check password
// password incorrect? return err
// password correct? generate token
// return token

export { registerUser };
