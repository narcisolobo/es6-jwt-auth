import bcrypt from 'bcrypt';


/**
 * Generates a salt with 11 rounds or
 * an error.
 */
async function generateSalt() {
  try {
    return await bcrypt.genSalt(11);
  } catch (error) {
    return error;
  }
}

/**
 * Generates a hashed password or an
 * error.
 */
async function hashPassword(password, salt) {
  try {
    return await bcrypt.hash(password, salt);
  } catch (error) {
    return error;
  }
}

/**
 * Checks a password against a hash
 * and returns the result or an error.
 */
async function checkPassword(password, hashedPassword) {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    return error;
  }
}

export { generateSalt, hashPassword, checkPassword };
