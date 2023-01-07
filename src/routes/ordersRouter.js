import Router from 'express-promise-router'
import { createOrder, getOrdersByUserId } from '../controllers/ordersControllers.js';
import { protect } from '../middlewares/authorization.js';

const ordersRouter = Router();

ordersRouter.post('/', protect, createOrder);
ordersRouter.get('/:id', protect, getOrdersByUserId);

export default ordersRouter;