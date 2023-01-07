import jwt from 'jsonwebtoken';
import { authConfig } from '../config/index.js'
import logger from '../utils/logger.js';

const { jwtSecret } = authConfig

export const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, jwtSecret);
      req.userId = decoded.id
      next();
    } catch (error) {
      logger.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
}