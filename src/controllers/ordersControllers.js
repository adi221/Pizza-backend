import * as ordersDal from '../DAL/ordersDAL.js'

export const createOrder = async (req, res) => {
  const { userId, body } = req
  const { list } = body
  await ordersDal.createOrder({ list, userId })
  res.status(201).json({ orderCreated: true })
}

export const getOrdersByUserId = async (req, res) => {
  const { userId } = req
  const result = await ordersDal.getOrdersByUserId({ userId })
  res.json(result)
}
