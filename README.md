# BrightFlights

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.9.

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


## What do I do?

It's a multi-language (ARABIC BY DEFAULT) flight reservation system as you can 
- get all flights from JSON-server
- you can search for a certain flight between 2 destinations
- book a flight with a needed number of tickets
- see your ticket with your flight data and total price

## What I use in my system?

- using JSON-server as a back-end
- ngx-translate to build a multi-language(Ar, En) using translate pipe
- angular animation
- web API's functions like encoding and decoding using atob() and btoa()
- filter data using 2 inputs 
- reusable component using search and card  
- @Input, @Output, EventEmmiter() to access parent and child component
- unit-testing on the reservation form
- use canActivate and guard to protect ticket component which is in a shared module
- bootstrap5 and font awesome library
- use dependency injection 
- using Scss for styling components


## How to run project? 

- you should run json server to see the data file by run this command on port 3000 
#      json-server --watch src/assets/data/flights.json  
- then you can serve the project 
#      ng serve --open 