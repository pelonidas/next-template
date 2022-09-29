FROM node:16-alpine

WORKDIR /app

COPY package.json ./
# npm install command has to be after copy package.json.
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

