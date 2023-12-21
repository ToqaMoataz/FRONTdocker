FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install 
RUN echo "building"
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
