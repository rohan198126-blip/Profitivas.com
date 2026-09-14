import { roundTo, safeDivide } from '../../utils/math';
import type { LtvCacInput, LtvCacResult } from './types';

export function calculateLtvCac(input: LtvCacInput): LtvCacResult {
  const { ltv, cac } = input;

  if (
    !Number.isFinite(ltv) ||
    !Number.isFinite(cac) ||
    ltv < 0 ||
    cac <= 0
  ) {
    return {
      ltv: 0,
      cac: 0,
      ratio: 0,
      netValue: 0,
      healthStatus: 'Invalid',
      isValid: false,
      errorMessage: 'LTV must be >= 0 and CAC must be greater than 0.',
    };
  }

  const ratio = safeDivide(ltv, cac, 0);
  const netValue = ltv - cac;

  let healthStatus = 'Healthy (Industry Standard)';
  if (ratio < 1) {
    healthStatus = 'Unviable (Acquisition costs exceed customer value)';
  } else if (ratio < 3) {
    healthStatus = 'Underperforming (Tight margins for overhead & growth)';
  } else if (ratio > 5) {
    healthStatus = 'High Efficiency (Opportunity to scale spend aggressively)';
  }

  return {
    ltv: roundTo(ltv, 2),
    cac: roundTo(cac, 2),
    ratio: roundTo(ratio, 2),
    netValue: roundTo(netValue, 2),
    healthStatus,
    isValid: true,
  };
}
