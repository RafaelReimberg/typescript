import { Request, Response, NextFunction } from 'express'

// class AuthController {
//   async create(req: Request, res: Response): Promise<Response> {
//     return res.status(200).json({ message: 'Autenticacao com sucesso' })
//   }

//   async destroy() {}
// }

// export default new AuthController()

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    // Implementação do middleware
    res.status(200).json({ message: 'Autenticação com sucesso' })
  } catch (error) {
    next(error) // Encaminha o erro para o middleware de tratamento de erros
  }
}

// video parado no 23:30
