# International SSN Validator

This utility checks validity of Social Security Numbers. Currently supported countries are USA and Switzerland.

## Getting started

### Installation

```sh
npm install @adia-technology/international-ssn-validator --save
```

### Usage

```js
import { validateSsn } from '@adia-technology/international-ssn-validator';

let isValid = validateSsn('756.1111.2222.00', 'ch');
```

## API

This library exposes a single function, `validateSsn`, that accepts two parameters:

* `ssn : string` - SSN to validate.
* `countryCode : string` - country for which to check the SSN against. Currently supported are `us` and `ch`.

## Dependencies

This library uses the following other libraries:

* [ahv13-validator](https://www.npmjs.com/package/ahv13-validator) ([ISC License](https://opensource.org/licenses/ISC))
* [ssn-validator](https://www.npmjs.com/package/ssn-validator) ([MIT Lincense](https://opensource.org/licenses/MIT))
