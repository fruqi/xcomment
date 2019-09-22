FROM node:10.16.3

LABEL author="Amrta Kautsar Faruqi"

ENV NODE_ENV=production
ENV PORT=3000

COPY . /var/www
WORKDIR /var/www

RUN npm install

EXPOSE $PORT

ENTRYPOINT [ "npm", "start" ]