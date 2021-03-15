import { body } from 'express-validator';

export const profileValidation = [
    body("name", "Enter name")
        .isString()
        .isLength({
            min: 2,
            max: 30
        })
        .withMessage("The allowed number of characters in a name is from 2 to 30"),
    body("gender", "Enter gender")
        .isIn(['male', 'female'])
        .withMessage("Incorrect gender"),
    body("birthdate", "Enter birthdate")
        .isDate({
            format: 'DD/MM/YYYY',
            delimiters: ['/', '-', '.']
        })
        .withMessage("Incorrect date"),
    body("city", "Enter city")
        .isString()
        .isLength({
            min: 2,
            max: 30
        })
        .withMessage("The allowed number of characters in a city is from 2 to 30"),
]
