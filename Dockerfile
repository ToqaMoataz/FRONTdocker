FROM node:lts-alpine

ENV APP_DIR=/usr/src/app
ENV PORT=3000

WORKDIR $APP_DIR

COPY ["package.json", "package-lock.json*", "./"]

RUN chown -R 1009220000:0 $APP_DIR && npm install

USER root

COPY . .

EXPOSE $PORT

CMD ["npm", "start"]

