import { describe, it, expect } from 'vitest'
import { isCPF } from '../isCPF/index.mjs'

describe('isCPF Test case', () => {

  it.each([null, undefined, ''])('CPF should be invalid: %s', (cpf) => {
    expect(isCPF(cpf)).toBeFalsy()
  });
});