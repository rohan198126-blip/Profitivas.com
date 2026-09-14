import { roundTo } from '../../utils/math';
import type { LtvInput, LtvResult } from './types';

export function calculateLtv(input: LtvInput): LtvResult {
  const { averagePurchaseValue, purchaseFrequency, customerLifespan } = input;

  if (
    !Number.isFinite(averagePurchaseValue) ||
    !Number.isFinite(purchaseFrequency) ||
    !Number.isFinite(customerLifespan) ||
    averagePurchaseValue < 0 ||
    purchaseFrequency < 0 ||
    customerLifespan < 0
  ) {
    return {
      averagePurchaseValue: 0,
      purchaseFrequency: 0,
      customerLifespan: 0,
      annualValue: 0,
      ltv: 0,
      isValid: false,
      errorMessage: 'Average purchase value, purchase frequency, and lifespan must be non-negative numbers.',
    };
  }

  const annualValue = averagePurchaseValue * purchaseFrequency;
  const ltv = annualValue * customerLifespan;

  return {
    averagePurchaseValue: roundTo(averagePurchaseValue, 2),
    purchaseFrequency: roundTo(purchaseFrequency, 2),
    customerLifespan: roundTo(customerLifespan, 2),
    annualValue: roundTo(annualValue, 2),
    ltv: roundTo(ltv, 2),
    isValid: true,
  };
}
