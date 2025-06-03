/* eslint-disable prettier/prettier */
import jwt, { Secret, SignOptions } from 'jsonwebtoken'
import AuthError from '@app/Auth/exceptions/AuthError'
import config from '@/config'


export default class AuthService {

  async signIn(email: string, password: string): Promise<{ user: object, token: string }> {
    const user = {
      id: '123',
      email: 'admin@admin.com',
      password: 'secret',
      fullName: 'Admin',
    }

    // verificar se o token está banido
    // if (await TokenService.isTokenBanned(token)) {
    //   throw new AuthError('Token is banned')


    // }

    // stop video 01:05:24


    if (email !== user.email || password !== user.password) {
      throw new AuthError('Invalid credentials')
    }

    const { id, fullName } = user

    // Geneater token
    const token = jwt.sign({ id },
      config.auth.secret as Secret,
      { expiresIn: config.auth.expiresIn } as SignOptions)

    return {
      user: {
        id,
        fullName,
        email,
      },
      token,
    }
  }

  async validatetoken(token: string): Promise<string> {
    try {
      const decoded = jwt.verify(token, config.auth.secret as Secret) as {
        id: string
      }

      return decoded.id

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new AuthError('Invalid token')
    }
  }
}
