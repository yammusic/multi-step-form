// export const REGEX_TWO_WORDS_OR_MORE = /^\s*\S+(\s+\S+)+\s*$/
export const REGEX_TWO_WORDS_OR_MORE = /([a-zA-Z]{2,})\s([a-zA-Z]{2,})/
// export const REGEX_EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const REGEX_ONLY_LETTERS = /^[a-zA-Z]+$/
export const REGEX_ONLY_NUMBER = /^[0-9]+$/
export const REGEX_PHONE_NUMBER = /^\d{10}$/
export const REGEX_POSTAL_CODE = /^\d{5,6}(-\d{4})?$/
// export const REGEX_STRONG_PASSWORD = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
export const REGEX_STRONG_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
