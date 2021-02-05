FROM node:12.20.1-alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN apk add --no-cache --virtual .build-deps make gcc g++ python
RUN yarn
RUN apk del .build-deps
COPY . .
COPY .env.production .env
RUN yarn build
ENV NODE_ENV production
EXPOSE 4998
CMD ["node", "dist/index.js"]
USER node
