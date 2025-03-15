/* eslint-disable prettier/prettier */
import { Request, Response } from 'express'
import AuthService from '@app/Auth/services/AuthServices'

class AuthController {
  async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    try{
      const { user, token } = new AuthService().signIn( email, password )
    } catch(error) {

    }

    return res.status(200).json({ message: 'Autenticacao com sucesso' })
  }

  async destroy() {}
}

export default new AuthController()

// export const create = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ): Promise<void> => {
//   try {
//     // Implementação do middleware
//     res.status(200).json({ message: 'Autenticação com sucesso, burrão' })
//   } catch (error) {
//     next(error) // Encaminha o erro para o middleware de tratamento de erros
//   }
// }

// video parado no 23:30
