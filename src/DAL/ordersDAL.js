import { execSqlQuery } from '../db/db.js'

export const createOrder = async ({ userId, list }) => {
  const query = 'insert into orders ("userId", list) values ($1, $2) returning *'
  const bindings = [userId, JSON.stringify(list)]
  const { rows: [createdOrder] } = await execSqlQuery(query, bindings)
  return createdOrder
}

export const getOrdersByUserId = async userId => {
  const query = 'select * from orders where "userId" = $1'
  const totalQuery = 'select count(*) from orders where "userId" = $1'
  const bindings = [userId]
  const { rows: ordersOfUser } = await execSqlQuery(query, bindings)
  const { rows: totalResult } = await execSqlQuery(totalQuery, bindings)
  return { items: ordersOfUser, total: Number(totalResult[0].count) }
}
