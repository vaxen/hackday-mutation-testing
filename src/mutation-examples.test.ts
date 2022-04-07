import { sum, logger, guessTheNumber, validateEmail } from './mutation-examples';


describe('MutationExamples test suite', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  }),
    describe('sume', () => {

      it('should sum 2 numbers', () => {
        const a = 3;
        const b = 4;

        const result = sum(a, b);

        expect(result).toEqual(7);
      });
    });

  describe('logger', () => {
    it('logs to the console', () => {
      const message = 'hello world';
      jest.spyOn(global.console, 'log');

      logger(message);

      expect(console.log).toHaveBeenCalledWith(message);
    });
  });

  describe('guessTheNumber', () => {
    jest.spyOn(global.console, 'log');
    it('should log success message if value is 4', () => {
      guessTheNumber(4);
      expect(console.log).toBeCalledWith('Right Guess!');
    });

    it('should log success message if value is 7', () => {
      guessTheNumber(7);
      expect(console.log).toBeCalledWith('Right Guess!');

    });

    it('should log failure message if value is not 4 or 7', () => {
      guessTheNumber(11);
      expect(console.log).toBeCalledWith('Wrong guess try again');
    });
  });

  describe('validateEmail', () => {
    it('should return true if email is in a valid format', () => {
      expect(validateEmail('mattia@superawesome.com')).toBeTruthy;
    });
  });
});

