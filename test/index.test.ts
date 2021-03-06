import { validateSsn, CountryCode } from '../src';
import { ValidationResult } from '../src/ValidationResult';

test('Given empty SSN, result should not be valid', () => {
	let invalidSsn = '';

	expect(validateSsn(invalidSsn, 'ch')).toBe(ValidationResult.InvalidFormat);
	expect(validateSsn(invalidSsn, 'us')).toBe(ValidationResult.InvalidFormat);
});

test('Given null SSN, result should not be valid', () => {
	let invalidSsn = null;

	expect(validateSsn(invalidSsn, 'ch')).toBe(ValidationResult.InvalidFormat);
	expect(validateSsn(invalidSsn, 'us')).toBe(ValidationResult.InvalidFormat);
});

test('Given undefined SSN, result should not be valid', () => {
	let invalidSsn = undefined;

	expect(validateSsn(invalidSsn, 'ch')).toBe(ValidationResult.InvalidFormat);
	expect(validateSsn(invalidSsn, 'us')).toBe(ValidationResult.InvalidFormat);
});

test('Given valid Swiss SSN, when validateSsn called with "ch" country code, result should be valid', () => {
	let validSwissSsns = [
		"756.5220.1643.81",
		"756.5837.4745.52",
		"756.1656.9672.13",
		"756.6168.0333.64",
		"756.0246.1057.45",
		"756.8478.9370.66",
		"756.0298.4726.97",
		"756.5113.6381.28",
		"756.5466.9658.89",
	];

	for (let validSsn of validSwissSsns) {
		expect(validateSsn(validSsn, 'ch')).toBe(ValidationResult.Valid);
	}
});

test('Given valid Swiss SSN, when validateSsn called with "us" country code, result should be invalid', () => {
	let validSwissSsn = "756.5220.1643.81";
	expect(validateSsn(validSwissSsn, 'us')).toBe(ValidationResult.InvalidFormat);
});

test('Given invalid Swiss SSN, result should be invalid', () => {
	let wrongChecksum = "756.5220.1643.88";
	let wrongPrefix = "757.5837.4745.51";
	let noDots = "7561656967213";
	let wrongSeparators = "756-6168-0333-64";
	let noChecksum = "756.0246.1057.4";
	let tooLong = "756.8478.9370.660";

	expect(validateSsn(wrongChecksum, 'ch')).toBe(ValidationResult.InvalidChecksum);
	expect(validateSsn(wrongPrefix, 'ch')).toBe(ValidationResult.InvalidFormat);
	expect(validateSsn(noDots, 'ch')).toBe(ValidationResult.InvalidFormat);
	expect(validateSsn(wrongSeparators, 'ch')).toBe(ValidationResult.InvalidFormat);
	expect(validateSsn(noChecksum, 'ch')).toBe(ValidationResult.InvalidFormat);
	expect(validateSsn(tooLong, 'ch')).toBe(ValidationResult.InvalidFormat);
});

test('Given valid US SSN, when validateSsn called with "us" country code, result should be valid', () => {
	let validUsSsns = [
		"011-23-4567",
		"011234567"
	];

	for (let validSsn of validUsSsns) {
		expect(validateSsn(validSsn, 'us')).toBe(ValidationResult.Valid);
	}
});

test('Given valid US SSN, when validateSsn called with "ch" country code, result should be invalid', () => {
	let validUsSsn = "011-23-4567";
	expect(validateSsn(validUsSsn, 'ch')).toBe(ValidationResult.InvalidFormat);
});

test('Given unsupported countryCode, validateSsn should throw an error', () => {
	expect(() => validateSsn('000', 'pl' as CountryCode)).toThrowError("'pl' country code is not supported.");
});

test('Given empty or null countryCode, validateSsn should throw an error', () => {
	expect(() => validateSsn('000', '' as CountryCode)).toThrowError('countryCode was not provided');
	expect(() => validateSsn('000', null)).toThrowError('countryCode was not provided');
});
