FROM node:21-alpine
EXPOSE 3000
WORKDIR app
COPY dist package.json package-lock.json ./
RUN npm install --production
ENTRYPOINT ["node", "index.js"]
