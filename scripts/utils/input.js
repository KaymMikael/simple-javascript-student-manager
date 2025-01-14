export function validateAndFocus(inputs) {
  for(const input of inputs) {
    if(!input.value) {
      input.focus();
      return true;
    }
  }
  return false;
}

export function toTitleCase(str) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}