FROM node:alpine

WORKDIR /frontend

COPY ./package-lock.json ./
COPY ./package.json ./

RUN npm i

COPY . .

CMD ["npm", "start"]