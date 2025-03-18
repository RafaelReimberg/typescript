/* eslint-disable prettier/prettier */
import { Router } from 'express'
import auth from '@app/Auth/controllers/AuthController'


const routes = Router()

routes.post('/auth/sign-in', (req, res) => auth.create(req, res))

export default routes
