export const getRandomItems = <T>(arr: T[], count: number) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, count);
};

export const getRandomElement = <T>(arr: T[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
