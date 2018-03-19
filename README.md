DB: Postgres
- Docker container
- Postico (visually see db)
API: Hapi
- PAW
- Postman
- Insomnia
Frontend: Vue

## Starting initial project steps:
- git init
    - Initialize empty git repo for project
- npm init --> confirm npm is installed globally
    - Creates package.json that lists out dependencies the project is using

## Set up eslint
- npm install --save-dev eslint
- install package in vscode: ESLint
- by default, eslint does nothing --> need to give default rule set
    - create .eslintrc file

## Start up docker container for postgres database
- postgres: database connection
    - npm install pg --save
 - docker community edition for mac
    - set up docker-compose.yml --> config file to pull down postgres db image
- start docker container
    - docker-compose up
- misc:
    - docker-compose run (code) --> run commands in docker container
- confirm access to db with postico

## Setup knex (connection to database)
- knex.js: tool to help write SQL queries/interact with database
    - npm install knex --save
    - knex init
        - will set up knexfile.js
- set up migration(s)
    - knex migrate:make [table name]
- run latest migration(s)
    - knex migrate:latest
- rollback latest migration(s)
    - knex migrate:rollback

## Setup seeded data
- make seed folder
    - knex seed:make [file name]
- run seeds
    - knex seed:run

- install npm packages:
    - hapi.js: API -- serving software to help make API endpoints 
        - npm install hapi --save

## To start application
- docker-compose up 
    - access database
- npm start
    - start hapi server
