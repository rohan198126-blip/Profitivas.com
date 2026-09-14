import { roundTo, safeDivide } from '../../utils/math';
import type { CacInput, CacResult } from './types';

export function calculateCac(input: CacInput): CacResult {
  const { acquisitionCosts, newCustomers } = input;

  if (
    !Number.isFinite(acquisitionCosts) ||
    !Number.isFinite(newCustomers) ||
    acquisitionCosts < 0 ||
    newCustomers <= 0
  ) {
    return {
      acquisitionCosts: 0,
      newCustomers: 0,
      cac: 0,
      isValid: false,
      errorMessage: 'Acquisition costs must be >= 0 and acquired customers must be > 0.',
    };
  }

  const cac = safeDivide(acquisitionCosts, newCustomers, 0);

  return {
    acquisitionCosts: roundTo(acquisitionCosts, 2),
    newCustomers: roundTo(newCustomers, 2),
    cac: roundTo(cac, 2),
    isValid: true,
  };
}
