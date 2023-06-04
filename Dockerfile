FROM node:20-alpine
EXPOSE 3000
WORKDIR app
COPY dist package.json yarn.lock .
RUN yarn install --production
ENTRYPOINT ["node", "index.js"]
