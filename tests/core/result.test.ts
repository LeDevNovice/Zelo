import { isValid } from '../../src/core/result';
import type { ValidationResult } from '../../src/core/result';

describe('ValidationResult', () => {
  it('should detect valid result', () => {
    const result: ValidationResult<string> = { success: true, data: 'hello' };

    expect(isValid(result)).toBe(true);
  });

  it('should detect invalid result', () => {
    const result: ValidationResult<string> = {
      success: false,
      errors: [{ path: 'name', message: 'Required' }],
    };

    expect(isValid(result)).toBe(false);
  });
});
