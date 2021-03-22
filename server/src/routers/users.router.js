import express from 'express'
import { updateUserValidation } from '../validations/user.validation'
import { UserCtrl } from '../controllers/user.controller'
import { passport } from '../core/passport'

export const usersRouter = express.Router()

usersRouter.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  UserCtrl.index
)
usersRouter.get(
  '/me',
  passport.authenticate('jwt', { session: false }),
  UserCtrl.me
)
usersRouter.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  UserCtrl.show
)
usersRouter.patch(
  '/:id',
  updateUserValidation,
  passport.authenticate('jwt', { session: false }),
  UserCtrl.update
)
usersRouter.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  UserCtrl.delete
)
