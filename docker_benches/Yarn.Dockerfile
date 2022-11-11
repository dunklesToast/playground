FROM node

WORKDIR /bench

COPY ["package.json", "yarn.lock", "/bench/"]

ENTRYPOINT ["yarn", "install"]
