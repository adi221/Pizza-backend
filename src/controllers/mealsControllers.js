import * as mealsDAL from '../DAL/mealsDAL.js'

export const getMeals = async (req, res) => {
  const result = await mealsDAL.getMeals()
  res.json(result)
}

export const getMealById = async (req, res) => {
  const result = await mealsDAL.getMealById(req.params.id)
  res.json(result)
}
