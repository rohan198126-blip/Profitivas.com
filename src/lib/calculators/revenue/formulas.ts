import { roundTo } from '../../utils/math';
import type { RevenueInput, RevenueResult } from './types';

export function calculateRevenue(input: RevenueInput): RevenueResult {
  const { unitsSold, pricePerUnit } = input;

  if (!Number.isFinite(unitsSold) || !Number.isFinite(pricePerUnit) || unitsSold < 0 || pricePerUnit < 0) {
    return {
      unitsSold: 0,
      pricePerUnit: 0,
      totalRevenue: 0,
      isValid: false,
      errorMessage: 'Units sold and price per unit must be non-negative numbers.',
    };
  }

  const totalRevenue = unitsSold * pricePerUnit;

  return {
    unitsSold: roundTo(unitsSold, 2),
    pricePerUnit: roundTo(pricePerUnit, 2),
    totalRevenue: roundTo(totalRevenue, 2),
    isValid: true,
  };
}
