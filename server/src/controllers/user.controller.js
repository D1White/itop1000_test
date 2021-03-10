import express from "express";
import { validationResult } from "express-validator";

import { UserModel } from "../models/user.model";
import { isValidObjectId } from "../utils/isValidObjectId";

class UserController {
    async index(_, res) {
        try {
            const users = await UserModel.find({}).exec();

            res.json({
                data: users,
            });
        } catch (error) {
            res.status(500).json({
                massage: JSON.stringify(error),
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

            const user = await UserModel.findById(userId).exec();

            res.json(user);
        } catch (error) {
            res.status(500).json({
                massage: JSON.stringify(error),
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
                password: req.body.password,
                isAdmin: req.body.isAdmin,
            };

            const user = await UserModel.create(data);

            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({
                massage: JSON.stringify(error),
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

            const user = await UserModel.updateOne(
                { _id: userId },
                {
                    $set: {
                        username: req.body.username,
                        email: req.body.email,
                        password: req.body.password,
                        isAdmin: req.body.isAdmin,
                    },
                }
            );

            res.json(user);
        } catch (error) {
            res.status(500).json({
                massage: JSON.stringify(error),
            });
        }
    }

    async delete(req, res) {
        const userId = req.params.id;
        if (!isValidObjectId(userId)) {
            res.status(404).send();
            return;
        }

        await UserModel.findByIdAndDelete(userId, (err) => {
            if (err) {
                res.status(404).send();
            } else {
                res.status(204).send();
            }
        });

        //TODO: delete profiles with this user
    }
}

export const UserCtrl = new UserController();
