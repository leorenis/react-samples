import { describe, it, expect } from 'vitest';
import { isCNPJ } from './index';

describe('isCNPJ Test case', () => {
  it.each([null, undefined, '', ' '])("CNPJ should NOT be '%s'", (cnpj) =>
    expect(isCNPJ(cnpj as unknown as string)).toBe(false)
  );
  it('CNPJ should be valid', () => {
    expect(isCNPJ('11.222.333/0001-81')).toBe(true);
  });

  it.each(['11.222.333/0001', '11.222.333'])(
    'CNPJ have to lenght 14 chars: %s',
    (cnpj) => {
      expect(isCNPJ(cnpj)).toBe(false);
    }
  );

  it.each(['11.222.333/0001-91', '11.222.333/0001-82', '11.222.001/0001-00'])(
    'CNPJ should have RIGHT digit calculation: %s',
    (cnpj) => {
      expect(isCNPJ(cnpj)).toBe(false);
    }
  );
});
