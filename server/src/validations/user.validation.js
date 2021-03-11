import { body } from 'express-validator';

export const createUserValidation = [
    body("username", "Enter username")
        .isString()
        .isLength({
            min: 2,
            max: 20
        })
        .withMessage("The allowed number of characters in a username is from 2 to 20"),
    body("email", "Enter email")
        .isString()
        .isLength({
            min: 3,
            max: 50
        })
        .withMessage("The allowed number of characters in an email is from 3 to 50"),
    body("password", "Enter password")
        .isString()
        .isLength({
            min: 3,
            max: 50
        })
        .withMessage("The allowed number of characters in a password is from 3 to 50"),
    body("isAdmin", "Enter whether the user is an admin")
        .isBoolean()
        .withMessage("Can be true or false"),
]


export const updateUserValidation = [
    body("username", "Enter username")
        .isString()
        .isLength({
            min: 2,
            max: 20
        })
        .withMessage("The allowed number of characters in a username is from 2 to 20"),
    body("email", "Enter email")
        .isString()
        .isLength({
            min: 3,
            max: 50
        })
        .withMessage("The allowed number of characters in an email is from 3 to 50"),
    body("isAdmin", "Enter whether the user is an admin")
        .isBoolean()
        .withMessage("Can be true or false"),
]
