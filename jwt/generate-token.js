import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const { JWT_SECRET } = process.env;

/**
 * This function generates a JSON Web Token.
 */
const generateToken = (id, expiration) => {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: expiration });
};

export default generateToken;
