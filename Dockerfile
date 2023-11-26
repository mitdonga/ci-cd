FROM node:18

WORKDIR /app/express

EXPOSE 3000

COPY package*.json .

RUN npm install

COPY . .

CMD ["node", "."]