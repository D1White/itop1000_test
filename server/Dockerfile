FROM node:14-alpine as builder
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
RUN npm run build


FROM node:14-alpine
WORKDIR /app
COPY --from=builder /app/build /app/dist
COPY package.json /app/package.json
COPY .env /app/.env
RUN npm install --only=prod
EXPOSE 4000
CMD ["node", "dist/server.js"]
