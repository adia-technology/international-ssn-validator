import { isValid } from 'ssn-validator';
import { ValidationResult } from './ValidationResult';

export function validateUsSsn(ssn ?: string) : ValidationResult {
	return isValid(ssn) ? ValidationResult.Valid : ValidationResult.InvalidFormat;
}
