import Router from 'express-promise-router'
import { generalConfig } from '../config/index.js';
import usersRouter from './usersRouter.js';
import mealsRouter from './mealsRouter.js';
import ordersRouter from './ordersRouter.js';

const apiRouter = Router();

export const indexRoute = (req, res) => {
  res.json({ serviceName: generalConfig.serviceName })
}

apiRouter.use('/users', usersRouter);
apiRouter.use('/meals', mealsRouter);
apiRouter.use('/orders', ordersRouter);

export default apiRouter;