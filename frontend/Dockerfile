FROM node:18-alpine

WORKDIR /frontend

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 4000
CMD ["npm", "run", "dev"]
