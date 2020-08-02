# class-validator-matches
Matches decorator for class-validator

[![Build Status](https://travis-ci.org/angelxmoreno/class-validator-matches.svg?branch=master)](https://travis-ci.org/angelxmoreno/class-validator-matches)
[![Coverage Status](https://coveralls.io/repos/github/angelxmoreno/class-validator-matches/badge.svg)](https://coveralls.io/github/angelxmoreno/class-validator-matches)
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
