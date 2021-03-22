import express from 'express'
import { profileValidation } from '../validations/profile.validation'
import { ProfileCtrl } from '../controllers/profile.controller'
import { passport } from '../core/passport'

export const profilesRouter = express.Router();

profilesRouter.get('/statistic', passport.authenticate('jwt', { session: false }), ProfileCtrl.statistic);
profilesRouter.get('/:id', passport.authenticate('jwt', { session: false }), ProfileCtrl.show);
profilesRouter.post('/', passport.authenticate('jwt', { session: false }), profileValidation, ProfileCtrl.create);
profilesRouter.patch('/:id', passport.authenticate('jwt', { session: false }), profileValidation, ProfileCtrl.update);
profilesRouter.delete('/:id', passport.authenticate('jwt', { session: false }), ProfileCtrl.delete);
