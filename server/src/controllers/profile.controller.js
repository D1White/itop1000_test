import { validationResult } from 'express-validator'

import { ProfileModel } from '../models/profile.model'
import { UserModel } from '../models/user.model'
import { isValidObjectId } from '../utils/isValidObjectId'

class ProfileController {
  async index(_, res) {
    try {
      const profiles = await ProfileModel.find({}).exec()

      res.json({
        data: profiles,
      })
    } catch (error) {
      res.status(500).json({
        message: error,
      })
    }
  }

  async show(req, res) {
    try {
      const profileId = req.params.id
      if (!isValidObjectId(profileId)) {
        res.status(404).send()
        return
      }

      if (
        !req.user.isAdmin &&
        JSON.stringify(req.user._id) !== JSON.stringify(profileId)
      ) {
        res.status(401).json({
          message: 'Not enough rights!',
        })
        return
      }

      const profiles = await ProfileModel.find({
        user_id: profileId,
      }).exec()

      res.json({
        data: profiles,
      })
    } catch (error) {
      res.status(500).json({
        message: error,
      })
    }
  }

  async create(req, res) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        res.status(400).json({
          errors: errors.array(),
        })
        return
      }

      const data = {
        name: req.body.name,
        gender: req.body.gender,
        birthdate: new Date(req.body.birthdate),
        city: req.body.city,
        user_id: req.body.user_id || req.user._id,
      }

      const profile = await ProfileModel.create(data)

      res.status(201).json(profile)
    } catch (error) {
      res.status(500).json({
        message: error,
      })
    }
  }

  async update(req, res) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        res.status(400).json({
          errors: errors.array(),
        })
        return
      }

      const profileId = req.params.id
      if (!isValidObjectId(profileId)) {
        res.status(404).send()
        return
      }

      const profile = await ProfileModel.findById(profileId).exec()

      if (
        !req.user.isAdmin &&
        JSON.stringify(req.user._id) !== JSON.stringify(profile.user_id)
      ) {
        res.status(401).json({
          message: 'Not enough rights!',
        })
        return
      }

      const updatedProfile = await ProfileModel.updateOne(
        { _id: profileId },
        {
          $set: {
            name: req.body.name,
            gender: req.body.gender,
            birthdate: req.body.birthdate,
            city: req.body.city,
          },
        }
      )

      res.json(updatedProfile)
    } catch (error) {
      res.status(500).json({
        message: error,
      })
    }
  }

  async delete(req, res) {
    try {
      const profileId = req.params.id
      if (!isValidObjectId(profileId)) {
        res.status(404).send()
        return
      }

      const profile = await ProfileModel.findById(profileId).exec()

      if (
        !req.user.isAdmin &&
        JSON.stringify(req.user._id) !== JSON.stringify(profile.user_id)
      ) {
        res.status(401).json({
          message: 'Not enough rights!',
        })
        return
      }

      await ProfileModel.findByIdAndDelete(profileId, (err) => {
        if (err) {
          res.status(404).send()
        } else {
          res.status(204).send()
        }
      })
    } catch (error) {
      res.status(500).json({
        message: error,
      })
    }
  }

  async statistic(req, res) {
    try {
      if (!req.user.isAdmin) {
        res.status(401).json({
          message: 'Not enough rights!',
        })
        return
      }
      const users = await UserModel.find().exec()
      const profiles = await ProfileModel.find().exec()
      const adults = profiles.filter((profile) => {
        const date = new Date(profile.birthdate)
        const now = new Date()
        if (now.getFullYear() - date.getFullYear() >= 18) {
          return profile
        }
        return false
      })

      res.json({
        users: users.length,
        profiles: profiles.length,
        adults: adults.length,
      })
    } catch (error) {
      res.status(500).json({
        message: error,
      })
    }
  }
}

export const ProfileCtrl = new ProfileController()
