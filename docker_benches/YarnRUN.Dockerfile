FROM node

WORKDIR /bench

COPY ["./package.json", "./yarn.lock", "/bench/"]

RUN yarn install
