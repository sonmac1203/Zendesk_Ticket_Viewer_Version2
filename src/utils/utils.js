export const shortenString = (s, len) =>
  s.length > len ? s.substring(0, len) + "..." : s;

export const capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
