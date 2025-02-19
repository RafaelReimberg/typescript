/* eslint-disable prettier/prettier */
import jwt from 'jsonwebtoken'

import AuthError from '@app/Auth/exceptions/AuthError'

export default class AuthService {
  async signIn(email: string, password: string): Promise<void> {
    const user = {
      id: '123',
      email: 'admin@admin.com',
      password: 'secret',
      fullName: 'Admin',
    }

    if (email !== user.email || password !== user.password) {
      throw new AuthError('Invalid credentials')
    }

    const { id, fullName } = user

    // Geneater token
    const token = jwt.sign({ id,}, process.env.JWT_SECRET, {
      expiresIn: '1d',
    })
  }
}
