import Router from 'express-promise-router'
import { login, signUp } from '../controllers/usersControllers.js';

const usersRouter = Router();

usersRouter.post('/signup', signUp);
usersRouter.post('/login', login);

export default usersRouter;