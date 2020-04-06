import { validateSwissSsn } from './validateSwissSsn';
import { validateUsSsn } from './validateUsSsn';

export type CountryCode = 'us' | 'ch';

export function validateSsn(ssn : string, countryCode : CountryCode) : boolean {

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
