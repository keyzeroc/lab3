
type TPickKeysReturn<T, K extends keyof T> = Pick<T, K>

const pickKeys = <T extends object, K extends keyof T>(obj: T, keys: K[]): TPickKeysReturn<T, K> => {
  const result = {} as TPickKeysReturn<T, K>
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key]
    }
  })
  return result
};


type TOmitKeysReturn<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const omitKeys = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): TOmitKeysReturn<T, K> => {
  const result = { ...obj };
  keys.forEach((key) => {
    delete result[key];
  });
  return result;
};


type TPickChangedFieldsReturn<T> = Partial<T>;

const pickChangedFields = <T extends Record<string, any>>(oldObj: T, obj: T): TPickChangedFieldsReturn<T> => {
  const newObj: TPickChangedFieldsReturn<T> = {};
  let key: keyof T;
  for (key in obj) {
    if (obj[key] !== oldObj[key]) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

export { pickKeys, omitKeys, pickChangedFields };