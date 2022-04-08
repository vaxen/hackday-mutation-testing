export const sum = (a: number, b: number): number => {
  return a + b;
};

export const logger = (message: string): void => {
  console.log(message);
};

export const guessTheNumber = (value: number): boolean => {
  if (value == 4 || value == 7) {
    return true
  } 

  return false;
};

export const validateEmail = (email: string): boolean => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  .test(email);
};
