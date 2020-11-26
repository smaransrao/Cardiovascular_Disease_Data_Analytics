# Cardiovascular data analysis project

This project was implemented using MEAN stack. It performs operations of data entry and extraction on a public dataset of cardiovascular data. Analytics using graphs can also be don on MongoDB Atlas interface.

Front end - Angular v8
Back end - Nodejs and Express
Database - MongoDB with Atlas interface

Developer tips:
 - Application is best run on IDE like visual studio
 - If using MongoDB Atlas as the database interface, make sure to enter the correct credentials* in the dbconfig.js file provided in the api/app/config folder
 
*You must first create an account in Atlas if you don't already have one and then create a database. After that you must import any dataset of your choice. Then you will be able to retrieve the credentials of the same database to link it with this application.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
