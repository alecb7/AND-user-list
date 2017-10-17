FROM node:8-alpine

WORKDIR /var/app/user-list-app-foo
ENV PORT=8080

COPY package.json ./
COPY server.js ./
COPY app ./app
COPY src ./src

RUN npm install

EXPOSE $PORT

CMD node server.js