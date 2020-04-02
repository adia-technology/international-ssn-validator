import * as AhvValidator from 'ahv13-validator';

const ahvRegex = /^756\.\d{4}\.\d{4}\.\d{2}$/;

export function validateSwissSsn(ssn ?: string) : boolean {
    if (ssn == null || !ahvRegex.test(ssn)) {
        return false;
    }

    let ahvValidator = new AhvValidator();
    return ahvValidator.isValid(ssn);
}
