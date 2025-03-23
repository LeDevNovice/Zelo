import { ValidationResult } from './result';

export interface ZType<TInput = unknown, TOutput = unknown> {
  readonly _input: TInput;
  readonly _output: TOutput;
  parse(value: unknown, options?: ParseOptions): ValidationResult<TOutput>;
}

export interface ParseOptions {
  locale?: string;
}
