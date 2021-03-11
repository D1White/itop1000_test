import express from "express";
import jwt from 'jsonwebtoken'
import { validationResult } from "express-validator";

import { UserModel } from "../models/user.model";
import { ProfileModel } from "../models/profile.model";
import { isValidObjectId } from "../utils/isValidObjectId";
import { generateMD5 } from '../utils/generateHash';

class UserController {
    async index(req, res) {
        try {
            if (!req.user.isAdmin) {
                res.status(401).json({
                    message: 'Not enough rights!'
                })
                return;
            }

            const users = await UserModel.find({}).exec();

            res.json({
                data: users,
            });
        } catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    }

    async show(req, res) {
        try {
            const userId = req.params.id;
            if (!isValidObjectId(userId)) {
                res.status(404).send();
                return;
            }

            if (!req.user.isAdmin) {
                res.status(401).json({
                    message: 'Not enough rights!'
                })
                return;
            }

            const user = await UserModel.findById(userId).exec();
            const profiles = await ProfileModel.find({ user_id: userId }).select('-user_id -__v').exec();

            res.json({
                ...user,
                profiles
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
                username: req.body.username,
                email: req.body.email,
                password: generateMD5(req.body.password + process.env.SECRET_KEY),
                isAdmin: req.body.isAdmin,
            };

            const user = await UserModel.create(data);

            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    }

    async afterLogin(req, res) {
        try {
            const user = req.user ? (req.user).toJSON() : undefined;
            res.json({
                ...user,
                token: jwt.sign({ data: req.user }, process.env.SECRET_KEY, { expiresIn: '30d' })
            })
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

            const userId = req.params.id;
            if (!isValidObjectId(userId)) {
                res.status(404).send();
                return;
            }

            if (!req.user.isAdmin) {
                res.status(401).json({
                    message: 'Not enough rights!'
                })
                return;
            }

            const user = await UserModel.updateOne(
                { _id: userId },
                {
                    $set: {
                        username: req.body.username,
                        email: req.body.email,
                        isAdmin: req.body.isAdmin,
                    },
                }
            );

            res.json(user);
        } catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    }

    async delete(req, res) {
        try {
            const userId = req.params.id;
            if (!isValidObjectId(userId)) {
                res.status(404).send();
                return;
            }

            if (!req.user.isAdmin) {
                res.status(401).json({
                    message: 'Not enough rights!'
                })
                return;
            }

            await UserModel.findByIdAndDelete(userId, (err) => {
                if (err) {
                    res.status(404).send();
                } else {
                    res.status(204).send();
                }
            });

            await ProfileModel.deleteMany({ user_id: userId });

        } catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    }

    async me(req, res) {
        try {
            const user = req.user ? (req.user).toJSON() : undefined;
            const profiles = await ProfileModel.find({ user_id: req.user._id }).select('-user_id -__v').exec();

            res.json({
                ...user,
                profiles
            })
        } catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    }
}

export const UserCtrl = new UserController();
