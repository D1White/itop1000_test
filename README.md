# ITOP 1000 test app

## Tech Stack:

### Frontend:
* React
* React Router
* Redux
* redux-thunk
* redux-persist
* SASS
* axios

### Backend:
* Node JS
* Express
* express-validator
* MongoDB
* mongoose
* Passport

---

## Start server:

Clone down this repository. You will need `Docker` installed globally on your machine.

Create docker image:

`docker build -t itop_test .`

To Start Server:

`docker run -p 5000:5000 itop_test`

To Visit App:

[`localhost:5000`](http://localhost:5000/)

---

## Development server:

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm run install-server`

`npm run install-client`

Add a line to server/package.json

`"proxy": "http://localhost:5000",`

⚠ Don't forget to customize your `.env` file.

To Start Server:

`npm run start-server`

`npm run start-client`

To Visit App:

[`localhost:3000`](http://localhost:3000/)
