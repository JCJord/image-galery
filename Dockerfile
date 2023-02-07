FROM node:18.13.0-alpine

WORKDIR /app/ 

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . . 

RUN npm run build 

EXPOSE 4200:4200

CMD /app/node_modules/.bin/ng serve --host 0.0.0.0