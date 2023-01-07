import { execSqlQuery } from '../db/db.js'
import { mealErrors } from '../utils/HttpError.js'

export const getMeals = async () => {
  const query = 'select * from meals'
  const totalQuery = 'select count(*) from meals'
  const { rows: meals } = await execSqlQuery(query)
  const { rows: totalResult } = await execSqlQuery(totalQuery)
  return { items: meals, total: Number(totalResult[0].count) }
}

export const getMealById = async id => {
  const query = 'select * from meals where id = $1'
  const bindings = [id]
  const { rows, rowCount } = await execSqlQuery(query, bindings)
  if (rowCount === 0) {
    throw new mealErrors.MEAL_NOT_FOUND(`Meal does not exist for id - ${id}`)
  }
  const [meal] = rows
  return meal
}