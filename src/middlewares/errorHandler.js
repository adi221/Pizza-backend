import logger from '../utils/logger.js'

export const errorHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({ message: err.message, code: err.code, data: err.data })
  next(err)
}

export const notFoundMiddleware = (req, res, next) => {
  const err = new Error('Route not found')
  err.statusCode = 404
  next(err)
}