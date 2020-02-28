export function isValid(object) {
  return object !== null && typeof object !== 'undefined';
}

export function isStringEmpty(string) {
  return isStringValid(string) && string.trim() === '';
}
