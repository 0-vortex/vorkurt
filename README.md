# Vorkurt

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Run story book

`npm run storybook`

## Angular Json

Add all file from bootstrap such as style

## Tsconfig.app.json

I added some property new such as

#### strictPropertyInitialization : true

which we don't need it anymore to initialization evry property

##### Add The @HostListener and @HostBinding
  With the HostBinding we can access either one element.
e.g 
  @HostBinding('style.backgroundColor') backgroundColor: string = 'color' (must to be initialized this parameter)
  
### For run test cypress
  npm e2e
