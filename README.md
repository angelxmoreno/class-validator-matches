# class-validator-matches
Matches decorator for class-validator
## Installation 
### Yarn
```sh
yarn add class-validator-matches
```
### NPM
```sh
npm install class-validator-matches --save
```
## Usage
```ts
import { Matches } from "class-validator-matches";

export class Form {

    password: string;
    
    @Matches('password')
    confirm_password: string;
}
```
## Test 
```sh
npm run test
```
