/* eslint-disable prettier/prettier */
import { Router } from 'express'

import users from '@app/Users/controllers/UsersController'


const routes = Router()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
routes.get('/users', users.index as any)

export default routes
