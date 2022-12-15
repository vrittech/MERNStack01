FROM node:18-alpine

WORKDIR /usr/bin/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8000

CMD ["npm","run","start"]
