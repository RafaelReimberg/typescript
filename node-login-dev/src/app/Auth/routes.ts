/* eslint-disable prettier/prettier */
import { Router } from 'express'
import auth from '@app/Auth/controllers/AuthController'
import authMiddleware from '@app/Auth/midlewares/AuthMidleware'

const routes = Router()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
routes.post('/auth/sign-in', (req, res) => auth.create(req, res) as any)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
routes.delete('/auth/sign-out', authMiddleware as any, (req, res) => auth.destroy(req, res) as any)


export default routes
