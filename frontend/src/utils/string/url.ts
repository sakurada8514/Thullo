export const replaceUrlParam = (
  url: string,
  replaceObj: { [key: string]: string }
): string => {
  let result = url;
  Object.keys(replaceObj).forEach((key) => {
    result = url.replace(`:${key}`, replaceObj[key]);
  });
  return result;
};
