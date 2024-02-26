function fixText(text) {
  let result = text.trim();
  result = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
  return result;
}
