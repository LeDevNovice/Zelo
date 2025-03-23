import { zelo } from '../src/index';

describe('zelo basics', () => {
  it('should load zelo.string()', () => {
    expect(typeof zelo.string).toBe('function');
  });
});
