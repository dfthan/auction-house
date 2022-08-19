FROM node:16 as build

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html