import AhvValidator from 'ahv13-validator';
import { ValidationResult } from './ValidationResult';

const ahvRegex = /^756\.\d{4}\.\d{4}\.\d{2}$/;

export function validateSwissSsn(ssn ?: string) : ValidationResult {
	if (ssn == null || !ahvRegex.test(ssn)) {
		return ValidationResult.InvalidFormat;
	}

	let ahvValidator = new AhvValidator();
	return ahvValidator.isValid(ssn) ? ValidationResult.Valid : ValidationResult.InvalidChecksum;
}
