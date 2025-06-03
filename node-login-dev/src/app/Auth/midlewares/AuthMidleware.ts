// midlewares express (bases)
import { Request, Response, NextFunction } from 'express'
// midleware de autenticacao
// function( req, res, next) {
//  logica
//  next()
// }
// midleware de aplicacao

import AuthService from '@app/Auth/services/AuthServices'
import AuthError from '@app/Auth/exceptions/AuthError'

export default async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (!authHeader) return res.status(401).json({ error: 'No token provided' })

  // headers
  // Authorization: Bearer <token>
  const [, token] = authHeader.split(' ')

  // if (token !== '123456')
  //   return res.status(401).json({ error: 'Token not provided' })
  try {
    // verificar se o token é valido
    const id = await new AuthService().validatetoken(token)

    // add userId to request
    req.user = { id, token }
  } catch (error) {
    if (error instanceof AuthError) {
      return res.status(401).send()
    }

    return res.status(500).json({ error })
  }

  return next()
}
