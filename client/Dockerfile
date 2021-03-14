FROM node:14-alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm install --only=prod
COPY . /app
RUN npm run build

FROM nginx:1.18.0-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 3000
