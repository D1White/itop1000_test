FROM node:14-alpine as builder
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
RUN npm run build

#add env

FROM node:14-alpine
WORKDIR /app
COPY --from=builder /app/build /app
COPY package.json /app/package.json
RUN npm install --only=prod
EXPOSE 8080
CMD ["node", "server.js"]
