FROM node:lts-gallium

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build:ts

ENTRYPOINT [ "yarn" ]

CMD [ "start" ]