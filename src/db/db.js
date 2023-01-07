import pg from 'pg'
import { postgresConfig } from '../config/index.js'
import logger from '../utils/logger.js'

const pgClient = new pg.Pool(postgresConfig)

export const execSqlQuery = (query, params = []) => new Promise((resolve, reject) => {
  pgClient.query(
    query,
    params,
    (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results)
    }
  )
})

export const checkPgConnection = () => {
  pgClient.query('select 1', (error, res) => {
    if (error) {
      logger.error('Connection to database failed', error)
      throw error
    }
    logger.info('Database is okay, connection succeded.')
  })
}

export const pgErrorCodes = {
  VALUE_ALREADY_EXISTS: '23505',
}