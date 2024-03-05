FROM node:20.11.0

WORKDIR /app

COPY servers/node.js servers/*.json .

EXPOSE 3001

CMD ["node", "node.js"]