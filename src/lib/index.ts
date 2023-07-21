import EasyLibphonenumber from "./easy-libphonenumber.svelte";

export default EasyLibphonenumber;


export type PhoneNumberFindType = {
    number: {
        country: string,
        countryCallingCode: string,
        number: string,
        nationalNumber: string
    },
    startsAt: number,
    endsAt: number
}

export type ParsePhoneNumberType = {
    country: String,
    number: String,
    countryCallingCode: string,
    nationalNumber: string,
    ext: string,
    carrierCode: string,
    isPossible: () => boolean,
    isValid: () => boolean,
    getType: () => String,
    formatInternational: () => string,
    formatNational: () => string,
    getURI: () => string,
    format: (format: 'NATIONAL' | 'INTERNATIONAL' | 'RFC3966') => string,
}

/**
 * Parse the given phone number
 * @param {*} libphonenumber any : instance
 * @param {*} phoneNumber sring Phone number 
 * @param {*} countyCode  string country code like, US, IN ...
 */
export function parsePhoneNumber(libphonenumber: any, phoneNumber: string, countyCode: string): ParsePhoneNumberType | null {
    if (libphonenumber) {
        const parse = libphonenumber.parsePhoneNumber(phoneNumber, countyCode)
        return parse
    }
    return null;
}

/**
 * Find all phone numbers from the text
 * @param libphonenumber 
 * @param text 
 * @param countryCode 
 */
export function findPhoneNumbersInText(libphonenumber: any, text: string, countryCode: string): PhoneNumberFindType[] {
    if (libphonenumber) {
        return libphonenumber.findPhoneNumbersInText(text, countryCode);
    }
    return [];
}

/**
 * Check the phone number is valid or not.
 * @param libphonenumber 
 * @param phoneNumber 
 * @param countryCode 
 * @returns boolean
 */
export function isValidPhoneNumber(libphonenumber: any, phoneNumber: string, countryCode: string): boolean {
    if (libphonenumber) {
        return libphonenumber.isValidPhoneNumber(phoneNumber, countryCode)
    }
    return false;
}