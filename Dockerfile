FROM node:lts-alpine

ENV APP_DIR=/usr/src/app
ENV PORT=3000

WORKDIR $APP_DIR

COPY ["package.json", "package-lock.json*", "./"]

RUN chown -R root $APP_DIR

USER root

RUN npm install

COPY . .

EXPOSE $PORT

CMD ["npm", "start"]



