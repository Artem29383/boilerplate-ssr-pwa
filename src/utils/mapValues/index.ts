export const mapValues = <
  T extends Record<string, any>,
  R extends (value: T[string], item: string, values: T) => any
>(
  values: T,
  callback: R
) => {
  return Object.keys(values).reduce((acc: Record<string, any>, item) => {
    acc[item] = callback(values[item], item, values);
    return acc;
  }, {});
};
