FROM node:lts-alpine

# Set environment variables
ENV APP_DIR=/usr/src/app
ENV PORT=3000

WORKDIR $APP_DIR

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install && chmod 755 $APP_DIR && npm cache clean --force

RUN echo "building"

COPY . .

EXPOSE $PORT

CMD ["npm", "start"]
