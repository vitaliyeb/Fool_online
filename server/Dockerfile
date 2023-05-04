FROM node as base
WORKDIR /app
COPY package*.json /
EXPOSE $PORT

FROM base as production
ENV NODE_ENV=production
RUN npm install --only=production
COPY . /app
CMD ["node", "app.ts"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install
COPY . /app
CMD ["npm", "run", "dev"]