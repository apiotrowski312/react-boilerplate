FROM alpine:3.7

RUN apk add --no-cache --update \
      bash \
      build-base \
      git \
      nodejs \
      nodejs-npm

COPY ./src /srv/app

WORKDIR /srv/app

RUN npm i --no-optional -S express morgan
RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:server"]

