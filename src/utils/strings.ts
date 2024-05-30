export const getRandomInt = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomLengthSubstring = (inputString: string, length: number, margin = 0) =>
  inputString.substring(0, length + getRandomInt(margin));

export const trimHttpProtocol = (url: string) => {
  const trailingSlashRegex = /\/$/;
  const protocolRegex = /^(https?:\/\/)/i;

  const withoutSlash = url.replace(trailingSlashRegex, '');
  const withoutProtocol = withoutSlash.replace(protocolRegex, '');

  return withoutProtocol;
};

export const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
