import express from "express";
import jwt from 'jsonwebtoken'
import { validationResult } from "express-validator";

import { ProfileModel } from "../models/profile.model";
import { UserModel } from "../models/user.model";
import { isValidObjectId } from "../utils/isValidObjectId";
import { generateMD5 } from '../utils/generateHash';

class ProfileController {
    async index(req, res) {
        try {
            const profiles = await ProfileModel.find({}).exec();

            res.json({
                data: profiles,
            });
        } catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    }

    async create(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({
                    errors: errors.array(),
                });
                return;
            }

            const data = {
                name: req.body.name,
                gender: req.body.gender,
                birthdate: req.body.birthdate,
                city: req.body.city,
                user_id: req.user._id,
            };

            const profile = await ProfileModel.create(data);

            res.status(201).json(profile);
        } catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    }

    async update(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({
                    errors: errors.array(),
                });
                return;
            }

            const profileId = req.params.id;
            if (!isValidObjectId(profileId)) {
                res.status(404).send();
                return;
            }

            const profile = await ProfileModel.findById(profileId).exec();

            if (!req.user.isAdmin || req.user._id !== profile.user_id) {
                res.status(401).json({
                    message: 'Not enough rights!'
                })
                return;
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
            );

            res.json(updatedProfile);
        } catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    }

    async delete(req, res) {
        try {
            const profileId = req.params.id;
            if (!isValidObjectId(profileId)) {
                res.status(404).send();
                return;
            }

            const profile = await ProfileModel.findById(profileId).exec();

            if (!req.user.isAdmin || req.user._id !== profile.user_id) {
                res.status(401).json({
                    message: 'Not enough rights!'
                })
                return;
            }

            await ProfileModel.findByIdAndDelete(profileId, (err) => {
                if (err) {
                    res.status(404).send();
                } else {
                    res.status(204).send();
                }
            });
        } catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    }
}

export const ProfileCtrl = new ProfileController();
