import Router from 'express-promise-router'
import { getMeals, getMealById } from '../controllers/mealsControllers.js';
import { protect } from '../middlewares/authorization.js';

const mealsRouter = Router();

mealsRouter.get('/', protect, getMeals);
mealsRouter.get('/:id', protect, getMealById);

export default mealsRouter;