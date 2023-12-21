FROM node:lts-alpine

# Set environment variables
ENV APP_DIR=/usr/src/app
ENV PORT=3000

WORKDIR $APP_DIR

COPY ["package.json", "package-lock.json*", "./"]

RUN mkdir /.npm && chown -R 1009220000:0 /.npm \
    && mkdir -p /usr/src/app/node_modules && chown -R 1009220000:0 /usr/src/app/node_modules \
    && mkdir -p /usr/src/app/node_modules/.cache && chown -R 1009220000:0 /usr/src/app/node_modules/.cache

RUN echo "building"

COPY . .

EXPOSE $PORT

CMD ["npm", "install","react-scripts"]

CMD ["npm", "install","node_moduls"]

CMD ["npm", "start"]
