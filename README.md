<h1 align="center">Nodejs restful api template</h1>

This repository hosts very simple template of Nodejs API Server, that I use in my personal small projects.

## 1. Install System Dependencies

The server is built upon <a href="https://nodejs.org/en/" target="_blank">Node.js</a>, <a href="https://expressjs.com/" target="_blank">Express.js</a>, <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>, and it also utilises <a href="https://www.docker.com/" target="_blank">Docker</a> to run a database (<a href="https://www.mongodb.com/" target="_blank">MongoDB</a>).  

The app is tested with Node.js 18.12.1 (You can use asdf to install it from .tool-versions file).

&nbsp;

## 2. Setting up the environmental variables

* From the root folder of the project, navigate to `env.template`
  
  * Here you will find the default template of enviromental variables.
  
  &nbsp;
  
* Copy the content of `env.template`. In the root folder of the application create `.env` file and paste the content of `env.template` inside the file.
  
        node-restful-api-template/
        ├── .env
 
 
  &nbsp;
  
* You have now created a custom config file for the project, with the use of default development template.
  
&nbsp;

## 3. Install rest of dependencies

Application uses npm package manager, so to install all the necessary modules and dependencies cd into root folder of the repository and simply run:

  ```bash
  $ npm install
  ```
  
&nbsp;
  
## 4. Spin the Docker container and run the app

To run docker container execute:

  ```bash
  $ docker-compose up
  ```
  
 Then you can start the app with:

  ```bash
  $ npm run build
  ```

  ```bash
  $ npx
  ```
  
  &nbsp;