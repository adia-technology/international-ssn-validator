# International SSN Validator

This utility checks validity of Social Security Numbers. Currently supported countries are USA and Switzerland.

## Getting started

### Installation

```sh
npm install @adia-technology/international-ssn-validator --save
```

### Usage

```js
import { validateSsn, ValidationResult } from '@adia-technology/international-ssn-validator';

let validationResult = validateSsn('756.1111.2222.00', 'ch');
let isValid = validationResult === ValidationResult.Valid;
```

## API

This library exposes a single function, `validateSsn`, that accepts two parameters:

* `ssn : string` - SSN to validate.
* `countryCode : string` - country for which to check the SSN against. Currently supported are `us` and `ch`.

It returns a `ValidationResult`, which essentially is a string enum being set to one of the values: `'VALID'`, `'INVALID_FORMAT'` or `'INVALID_CHECKSUM'`.

## Dependencies

This library uses the following other libraries:

* [ahv13-validator](https://www.npmjs.com/package/ahv13-validator) ([ISC License](https://opensource.org/licenses/ISC))
* [ssn-validator](https://www.npmjs.com/package/ssn-validator) ([MIT Lincense](https://opensource.org/licenses/MIT))
