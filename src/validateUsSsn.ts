import { isValid } from 'ssn-validator';

export function validateUsSsn(ssn ?: string) {
	return isValid(ssn);
}
