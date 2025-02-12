export const delay = <T>(time = 0, value?: T): Promise<T | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });
};
