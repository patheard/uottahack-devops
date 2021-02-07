# uOttaHack 4 DevOps
GitHub Actions pipeline to build :hammer_and_pick:, test :alembic: and deploy :rocket: a Dockerized Node.js app to [Heroku](https://dashboard.heroku.com/) 

# Tools you'll need
* [Gitpod.io account](https://gitpod.io/)

*or*

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/download/)
* [Docker](https://www.docker.com/get-started)
* [VS Code](https://code.visualstudio.com/download)

# Deploy
1. Create [Heroku account](https://signup.heroku.com/).
1. Grab your API key from the [accounts page](https://dashboard.heroku.com/account).

# Commands
## Node
```sh
# Start the app
PORT=3000 npm start

# See if it's working
curl http://localhost:3000

# Run the tests
npm test
```
## Docker
```sh
# Build the image
docker build -t your-image-name:tag-name .

# Run the image
docker run -e PORT=3000 -p 3000:3000 -d your-image-name:tag-name
```

# Credits
The guides I took code from.  Realistically, 50% of my dev knowledge is hosted offsite.
* [Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
* [How to test Express.js with Jest and Supertest](https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/)
