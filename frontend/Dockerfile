FROM jonatasra/react-cli

WORKDIR /app

RUN npm install -g create-react-app

COPY ./package.json ./package-lock.json ./

RUN npm install

COPY . .

# CMD [ "npm", "start" ]

EXPOSE 8000