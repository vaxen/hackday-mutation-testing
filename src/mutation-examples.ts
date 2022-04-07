export const sum = (a: number, b: number): number => {
  return a + b;
};

export const validateEmail = (email: string): boolean => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

export const log = (message: string): void => {
  console.log(message);
};

export const guessTheNumber = (value: number): void => {
  if (value === 4 || value === 7) {
    console.log('Right Guess!');
  }
  console.log('Wrong guess try again');
};
