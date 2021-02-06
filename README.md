# uOttaHack 4 DevOps
GitHub Actions pipeline to build, test and deploy a Dockerized Node.js app to [Heroku](https://dashboard.heroku.com/) :rocket:

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
