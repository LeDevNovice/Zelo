import { ValidationError } from './errors';

export type ValidationResult<T> =
  | { success: true; data: T }
  | { success: false; errors: ValidationError[] };

export const isValid = <T>(result: ValidationResult<T>): result is { success: true; data: T } => {
  return result.success === true;
};
