import { validateSwissSsn } from './validateSwissSsn';
import { validateUsSsn } from './validateUsSsn';

type CountryCode = 'us' | 'ch';

export function validateSsn(ssn : string, countryCode : CountryCode) : boolean {
    switch (countryCode) {
        case 'us':
            return validateUsSsn(ssn);
        case 'ch':
            return validateSwissSsn(ssn);
        default:
            throw new Error('');
    }
}
