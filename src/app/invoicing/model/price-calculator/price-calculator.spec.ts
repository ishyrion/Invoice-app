import { PriceCalculator, ItemPrice, CalcRequest, NotEnoughParamsError} from './price-calculator';
import { Tax } from '../item';

describe('allow calculate pricing based on input', () => {
    it('calculate gross based on nett + tax', () => {
      const calc = new PriceCalculator();
      const calculationRequest: CalcRequest = {
        netto: 100,
        gross: null,
        tax: 0.23
      };

      const res = calc.calculate(calculationRequest);
      expect(res.net).toBe(100.00);
      expect(res.gross).toBe(123.00);
      expect(res.taxValue).toBe(23.00);
      expect(res.tax).toBe(Tax.t23);
    });

    it('calculate nett based on gross', () => {
      const calc = new PriceCalculator();
      const calculationRequest = {
        netto: null,
        gross: 123,
        tax: Tax.t23
      };

      const res = calc.calculate(calculationRequest);
      expect(res.net).toBe(100.00);
      expect(res.gross).toBe(123.00);
      expect(res.taxValue).toBe(23.00);
      expect(res.tax).toBe(Tax.t23);
    });

    it('more fancy example nett based on gross', () => {
      const calc = new PriceCalculator();
      const calculationRequest = {
        netto: null,
        gross: 100,
        tax: 0.23
      };

      const res = calc.calculate(calculationRequest);
      expect(res.net).toBe(81.30);
      expect(res.gross).toBe(100);
      expect(res.taxValue).toBe(18.70);
      expect(res.tax).toBe(0.23);
    });

    it('and one more', () => {
      const calc = new PriceCalculator();
      const calculationRequest = {
        netto: null,
        gross: 777.00,
        tax: 0.08
      };

      const res = calc.calculate(calculationRequest);
      expect(res.net).toBe(719.44);
      expect(res.gross).toBe(777.00);
      expect(res.taxValue).toBe(57.56);
      expect(res.tax).toBe(0.08);
    });

    it('raise error when no net nor gross', () => {
      const calc = new PriceCalculator();
      const calculationRequest = {
        netto: null,
        gross: null,
        tax: 0.08
      };

      expect(() => calc.calculate(calculationRequest)).toThrow(new NotEnoughParamsError('not enough parameters'));
    });
});
