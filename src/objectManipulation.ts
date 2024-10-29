const pickKeys = (obj: any, keys: string[]) => {
  const newObj: any = {};
  keys.forEach((key) => {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};

const omitKeys = (obj: any, keys: string[]) => {
  const newObj: any = {};
  Object.keys(obj).forEach((key) => {
    if (!keys.includes(key)) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};

const pickChangedFields = (oldObj: any, obj:any) => {
  const newObj: any = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== oldObj[key]) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};

export { pickKeys, omitKeys, pickChangedFields };