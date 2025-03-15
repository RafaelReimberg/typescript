/* eslint-disable prettier/prettier */
import { Request, Response } from 'express'
import AuthService from '@app/Auth/services/AuthServices'
import AuthError from '@app/Auth/exceptions/AuthError'

class AuthController {
  async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    try{
      const { user, token } = await new AuthService().signIn( email, password )

      return res.status(200).json({ user, token })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      if( error instanceof AuthError ) return res.status(401).send()

        return res.status(500).json({ error })
    }
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
