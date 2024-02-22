# Application Docker file Configuration
# Visit https://docs.docker.com/engine/reference/builder/

FROM node:latest
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 8000
CMD ["npm","run","start"]