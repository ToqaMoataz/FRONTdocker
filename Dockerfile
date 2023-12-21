FROM node:lts-alpine

# Set environment variables
ENV APP_DIR=/usr/src/app
ENV PORT=3000

WORKDIR $APP_DIR

COPY ["package.json", "package-lock.json*", "./"]

RUN chmod 755 $APP_DIR

RUN npm install

RUN echo "building"

COPY . .

EXPOSE $PORT

CMD ["npm", "start"]
