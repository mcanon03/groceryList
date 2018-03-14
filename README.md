DB: Postgres
- Postico
API: Hapi
- PAW
- Postman
- Insomnia
Frontend: Vue

## Starting initial project steps:
- git init
    - Initial empty git repo for project
- npm init --> confirm npm is installed globally
    - Creates package.json that lists out dependencies the project is using

## Set up eslint
- npm install --save-dev eslint
- install package in vscode: ESLint
- by default, eslint does nothing --> need to give default rule set
    - create .eslintrc file

## Set up database
- install
    - knex.js: tool to help write SQL queries/interact with database
        - npm install knex --save
    - postgres: database connection
        - npm install pg --save
    - hapi.js: API -- serving software to help make API endpoints 
        - npm install hapi --save

