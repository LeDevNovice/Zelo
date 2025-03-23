export type ValidationError = {
  path: string;
  message: string;
  code?: string;
  locale?: string;
  meta?: Record<string, unknown>;
};
