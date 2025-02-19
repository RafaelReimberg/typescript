/* eslint-disable prettier/prettier */
import { Router } from 'express'

import { create } from '@app/Auth/controllers/AuthController'
// import auth from '@app/Auth/controllers/AuthController'

const routes = Router()

routes.post('/auth/sign-in', create)

export default routes
