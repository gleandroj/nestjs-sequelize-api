FROM node:16.14.2-alpine as base

WORKDIR /app

FROM base as builder

COPY . ./

RUN yarn install && yarn build && ls -la

FROM base as production

COPY --from=builder /app/dist ./dist
COPY ./package.json ./yarn.lock ./

RUN yarn install --production

EXPOSE 3000

CMD ["yarn", "start:prod"]