import { execSqlQuery, pgErrorCodes } from '../db/db.js'
import { userErrors } from '../utils/HttpError.js'

export const login = async ({ email, password }) => {
  const q = 'select id, "firstName", "lastName", email from users where email = $1 and password = $2'
  const params = [email, password]
  const { rowCount, rows } = await execSqlQuery(q, params)
  if (rowCount === 0) {
    throw new userErrors.USER_NOT_FOUND('User does not exist for given credentials')
  }
  const [user] = rows
  return user
}

export const signUp = async ({ firstName, lastName, email, password }) => {
  const q = 'insert into users ("firstName", "lastName", email, password) values ($1, $2, $3, $4) returning id, "firstName", "lastName", email'
  const params = [firstName, lastName, email, password]
  try {
    const { rows: [createdUser] } = await execSqlQuery(q, params)
    return createdUser
  } catch (error) {
    if (error.code === pgErrorCodes.VALUE_ALREADY_EXISTS) {
      throw new userErrors.EMAIL_ALREADY_EXIST('Email already exists')
    }
  }
}