import DatabaseError from "../errors/db-error.js";
import { createUser, findUserByEmail } from "../database/logic/user-logic.js";

async function registerUser(user) {
  try {
    return await createUser(user);
  } catch (err) {
    throw new DatabaseError(err);
  }
}

async function loginUser(email, password) {
  try {
    // find user in db
    const user = await findUserByEmail(email);
    // no user? return err
  } catch (err) {
    return err;
  }
}



// user? check password
// password incorrect? return err
// password correct? generate token
// return token

export { registerUser, loginUser };
