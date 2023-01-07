import jwt from 'jsonwebtoken';
import { authConfig } from '../config/index.js';

const generateToken = id => {
  return jwt.sign({ id }, authConfig.jwtSecret, {
    expiresIn: '30d',
  });
};

export default generateToken;
