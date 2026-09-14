import { roundTo, safeDivide } from '../../utils/math';
import type { RoasInput, RoasResult } from './types';

export function calculateRoas(input: RoasInput): RoasResult {
  const { revenue, adSpend } = input;

  if (
    !Number.isFinite(revenue) ||
    !Number.isFinite(adSpend) ||
    revenue < 0 ||
    adSpend <= 0
  ) {
    return {
      revenue: 0,
      adSpend: 0,
      roasMultiple: 0,
      roasPercentage: 0,
      netReturn: 0,
      isValid: false,
      errorMessage: 'Revenue must be non-negative and ad spend must be greater than 0.',
    };
  }

  const roasMultiple = safeDivide(revenue, adSpend, 0);
  const roasPercentage = roasMultiple * 100;
  const netReturn = revenue - adSpend;

  return {
    revenue: roundTo(revenue, 2),
    adSpend: roundTo(adSpend, 2),
    roasMultiple: roundTo(roasMultiple, 2),
    roasPercentage: roundTo(roasPercentage, 2),
    netReturn: roundTo(netReturn, 2),
    isValid: true,
  };
}
