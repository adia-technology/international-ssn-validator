import { validateSwissSsn } from './validateSwissSsn';
import { validateUsSsn } from './validateUsSsn';
import { ValidationResult } from './ValidationResult';

export type CountryCode = 'us' | 'ch';

export { ValidationResult };

export function validateSsn(ssn : string, countryCode : CountryCode) : ValidationResult {

	if (countryCode == null || countryCode as string === '') {
		throw new Error('countryCode was not provided');
	}

	switch (countryCode) {
		case 'us':
			return validateUsSsn(ssn);
		case 'ch':
			return validateSwissSsn(ssn);
		default:
			throw new Error(`'${countryCode}' country code is not supported.`);
	}
}
