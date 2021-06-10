FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./


# If you are building your code for production
# RUN npm ci --only=production
RUN npm install
# Bundle app source
COPY . .

#importing database
RUN node ./data/import_db.js --import

EXPOSE 3000

CMD  [ "npm", "start" ] 