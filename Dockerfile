FROM node:20-alpine
EXPOSE 3000
WORKDIR app
COPY dist package.json package-lock.json .
RUN npm install --production
ENTRYPOINT ["node", "index.js"]
