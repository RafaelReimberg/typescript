// midlewares express (bases)
import { Request, Response, NextFunction } from 'express'
// midleware de autenticacao
// function( req, res, next) {
//  logica
//  next()
// }
// midleware de aplicacao
export default async (req: Request, res: Response, next: NextFunction) => {
  // if (!req.headers.authorization){
  //   return res.status(401).json({ error: 'No token provided' })
  // }
  const authHeader = req.headers.authorization

  return next()
}

// video stop 51:30
