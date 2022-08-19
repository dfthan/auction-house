FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . . 

RUN npm install

RUN npm run build

USER node

CMD npm start


