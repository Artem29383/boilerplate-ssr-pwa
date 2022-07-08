export const getOrderNumberFromURL = (string: string, number: number) =>
  `/${string.split('/').filter(el => el)[number - 1]}`;
