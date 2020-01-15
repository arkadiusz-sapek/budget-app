FROM node:alpine

WORKDIR /backend

COPY ./package-lock.json ./
COPY  ./package.json ./

RUN npm i


COPY . .

CMD ["npm", "start"]