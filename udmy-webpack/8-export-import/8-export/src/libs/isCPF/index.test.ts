import { describe, it, expect } from 'vitest';
import { isCPF } from './index';

describe('isCPF Test case', () => {
  it.each([null, undefined, ''])('CPF should be invalid: %s', (cpf) => {
    expect(isCPF(cpf as unknown as string)).toBeFalsy();
  });
});
