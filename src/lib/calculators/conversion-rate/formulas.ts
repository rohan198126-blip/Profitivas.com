import { roundTo, safeDivide } from '../../utils/math';
import type { ConversionRateInput, ConversionRateResult } from './types';

export function calculateConversionRate(input: ConversionRateInput): ConversionRateResult {
  const { conversions, visitors } = input;

  if (
    !Number.isFinite(conversions) ||
    !Number.isFinite(visitors) ||
    conversions < 0 ||
    visitors <= 0
  ) {
    return {
      conversions: 0,
      visitors: 0,
      conversionRate: 0,
      dropOffRate: 0,
      dropOffCount: 0,
      isValid: false,
      errorMessage: 'Conversions must be >= 0 and total visitors must be greater than 0.',
    };
  }

  if (conversions > visitors) {
    return {
      conversions: roundTo(conversions, 2),
      visitors: roundTo(visitors, 2),
      conversionRate: 0,
      dropOffRate: 0,
      dropOffCount: 0,
      isValid: false,
      errorMessage: 'Conversions cannot exceed total visitors or interactions.',
    };
  }

  const conversionRate = safeDivide(conversions, visitors, 0) * 100;
  const dropOffRate = 100 - conversionRate;
  const dropOffCount = Math.max(0, visitors - conversions);

  return {
    conversions: roundTo(conversions, 2),
    visitors: roundTo(visitors, 2),
    conversionRate: roundTo(conversionRate, 2),
    dropOffRate: roundTo(dropOffRate, 2),
    dropOffCount: roundTo(dropOffCount, 2),
    isValid: true,
  };
}
