import { isValid } from 'ssn-validator';

export function validateUsSsn(ssn ?: string) : boolean {
	return isValid(ssn);
}
