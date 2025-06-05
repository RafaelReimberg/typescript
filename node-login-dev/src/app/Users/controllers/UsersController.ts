import { Request, Response } from 'express'

class UsersController {
  async index(req: Request, res: Response): Promise<Response> {
    const user = [{ id: '1987', email: 'raaafael.reimberg@hotmail.com' }]

    return res.status(200).json(user)
  }
}

export default new UsersController()
