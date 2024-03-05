FROM node:20.11.0

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY servers/express.js servers/*.json .

EXPOSE 3002

CMD ["node", "express.js"]