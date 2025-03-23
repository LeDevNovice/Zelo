import { isValid } from '../../src/core/result';
import type { ValidationResult } from '../../src/core/result';
import type { ValidationError } from '../../src/core/errors';

describe('ValidationResult', () => {
  it('should detect valid result', () => {
    const result: ValidationResult<string> = {
      success: true,
      data: 'hello',
    };

    expect(isValid(result)).toBe(true);
  });

  it('should detect invalid result', () => {
    const result: ValidationResult<string> = {
      success: false,
      errors: [{ path: 'name', message: 'Required' }],
    };

    expect(isValid(result)).toBe(false);
  });

  it('should allow safe narrowing with isValid()', () => {
    const result: ValidationResult<number> =
      Math.random() > 0.5
        ? { success: true, data: 42 }
        : {
            success: false,
            errors: [
              {
                path: 'age',
                message: 'Must be a number',
                code: 'not_a_number',
              },
            ],
          };

    if (isValid(result)) {
      const value: number = result.data;

      expect(typeof value).toBe('number');
    } else {
      expect(Array.isArray(result.errors)).toBe(true);
      result.errors.forEach((err) => {
        expect(typeof err.path).toBe('string');
        expect(typeof err.message).toBe('string');
      });
    }
  });

  it('should accept full ValidationError structure with optional fields', () => {
    const error: ValidationError = {
      path: 'user.email',
      message: 'Invalid email address',
      code: 'invalid_email',
      locale: 'fr',
      meta: {
        rawValue: 'abc@',
        hint: 'missing domain',
      },
    };

    expect(error.path).toBe('user.email');
    expect(error.code).toBe('invalid_email');
    expect(error.locale).toBe('fr');
    expect(error.meta?.rawValue).toBe('abc@');
    expect(error.meta?.hint).toBe('missing domain');
  });
});
