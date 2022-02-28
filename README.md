#pasos
1) clonar el proyecto o descargarlo desde github
2) entrar a la carpeta del proyecto usando cualquier terminal
3) usar el archivo sql dumpo provisto para importar la base de datos a mysql
4) buscar el archivo config/config.json y modificar las credenciales de su base de datos
5) escribir el comando "npm i" (terminal) para instalar los componentes necesarios del proyecto
6) es necesario instalar sequelize global, para eso escribir en la terminal npm install -g  --save mysql2
7) debe hacer build del frontend de angular en localhost, escriba en terminal: ng build --configuration staging (npx si usa la terminal de windows)
8) correr el servidor con la instruccion en terminal npm start, node start o node server.js, cualquiera de la 3 sirve, si quiere que se reinicie despues de cambios use nodemon start
9) en su browser vaya a la direccion http://localhost:8080/

# CiatPalmeraFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
