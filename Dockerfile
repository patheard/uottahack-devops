FROM node:15-alpine3.13

WORKDIR /app

COPY package*.json ./
COPY src/ ./src/

RUN npm ci --only=production

# To run locally, you'll need to pass the PORT as an environment variable:
# docker run -e PORT=8080 -p 8080:8080 -d image-name:tag
EXPOSE $PORT

CMD [ "npm", "start" ]