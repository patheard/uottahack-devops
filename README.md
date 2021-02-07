# uOttaHack 4 DevOps
GitHub Actions pipeline to build :hammer_and_pick: test :alembic: and deploy :rocket: a Dockerized Node.js app to [Heroku](https://dashboard.heroku.com/) 

# Tools you'll need
* [Gitpod.io account](https://gitpod.io/)

*or*

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/download/)
* [Docker](https://www.docker.com/get-started)
* [VS Code](https://code.visualstudio.com/download)
* Linux shell.  Git Bash or [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install-win10) work.

# Deploy
1. Create [Heroku account](https://signup.heroku.com/).
1. [Create a new app](https://dashboard.heroku.com/new-app).
1. Grab your API key from the [accounts page](https://dashboard.heroku.com/account).

If you want to try the pipeline in your own repo, you'll need to create a `HEROKU_API_KEY` [secret in you repo](https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository).  If you [fork this repo and then submit a pull request back](https://guides.github.com/activities/forking/), my `HEROKU_API_KEY` secret won't be shared by your PR's pipeline.  This is done to protect my repo's secrets.

# Setup Gitpod
If you go the Gitpod route, open your workspace like so:  
https://gitpod.io#github.com/patheard/uottahack-devops

Gitpod will ask you to authorize its access to your GitHub account (read-only).  If you want to push code from Gitpod back to the repo (write access), you have a few options:

1. :sweat_smile: **Easy, more trusting**: give Gitpod [access to write to your repos](https://gitpod.io/access-control/).
1. :raised_eyebrow:	**Harder, more cynical**: generate a [personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) and update the [git remote URL](https://stackoverflow.com/a/18936804/152963).  This may be  worse for security though since it's possible that your token will be clear text in the workspace pod logs.  Be curious if anyone has strong opinions about this.

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
docker run \
  --env PORT=3000 \
  --publish 3000:3000 \
  --detach \
  --name uottahack-devops \
  your-image-name:tag-name

# Exec into the running Docker container with a shell
# Sometimes this won't show the output of the commands until you exit
docker exec -it uottahack-devops sh

# Run commands in the container
docker exec uottahack-devops ls -la
docker exec uottahack-devops pwd
```

# Check it's running
```sh
# This works if you've used either `npm start` or the `docker run` command
# You can also use a browser, but it feels less fancy than the terminal, and 
# learning how to work with the command line is a big part of automation.
curl http://localhost:3000
```

# Credits
The guides I took code from.  Realistically, 50% of my dev knowledge is hosted offsite.
* [Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
* [How to test Express.js with Jest and Supertest](https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/)
* [Relevant](https://xkcd.com/1319/)
