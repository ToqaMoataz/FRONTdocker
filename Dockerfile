FROM node:lts-alpine

# Set environment variables
ENV APP_DIR=/usr/src/app
ENV PORT=3000

WORKDIR $APP_DIR

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install && mkdir /.npm && chown -R 1009220000:0 /.npm

RUN echo "building"

COPY . .

EXPOSE $PORT

CMD ["npm", "install","node_moduls"]

CMD ["npm", "start"]
