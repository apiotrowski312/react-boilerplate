FROM alpine:3.7

RUN apk add --no-cache --update \
      bash \
      build-base \
      git \
      nodejs \
      nodejs-npm

COPY . /app/

WORKDIR /app/

RUN npm install
RUN npm install express morgan
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "gitlab:start"]

