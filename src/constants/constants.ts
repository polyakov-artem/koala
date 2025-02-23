export const PUBLIC_PATH = '/koala/';
export const LOADING_PLACEHOLDER = 'Loading...';
export const LOADING_FAIL_PLACEHOLDER = `Failed to load...`;

export const inputErrors = {
  required: 'Field is required',
  minLength: (value: number) => `Must be at least ${value} characters in length`,
  maxLength: (value: number) => `Must be ${value} characters or less`,
  incorrectEmail: `Incorrect email address`,
  lettersAndDigits: 'Must contain only letters and digits',
};
