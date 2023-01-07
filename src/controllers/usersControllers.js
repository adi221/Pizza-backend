import generateToken from '../utils/jwt.js'
import * as usersDal from '../DAL/usersDAL.js'

export const login = async (req, res) => {
  const user = await usersDal.login(req.body)
  res.json({ user, token: generateToken(user.id) })
}

export const signUp = async (req, res) => {
  const createdUser = await usersDal.signUp(req.body)
  res.json({ user: createdUser })
}
