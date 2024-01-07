### Total Learning of the Backend

- npm init - To initialize the project, contains the package.json.
- Create folder public and src with .env, .gitignore(use .gitignore generator to generate all set the files) and also readme.md.
- Install nodemon and prettier with the dev dependencies like "npm i -D packagename"
- Initialize git repo to update regularly.
- Change "type": "module" to import the modules, otherwise to get require("packagename") use "type": "commonjs".
- Change the script according to the setting. "dev": "nodemon src/index.js".
- Always use git bash or linux machine to easily create folders using touch, mkdir commands.
- Use mongodb atlas for db and login into it. Create a cluster with the db and network access.
- Install express, mongoose and dotenv packages

- While connecting to db always there will be a problem
- 1. Therefore always wrap the code in "try and catch block or promises". There will be time taking in db operations therefore use "async and await".
- 2. Create a folder db and export all the code. This process uses distributed approach.
