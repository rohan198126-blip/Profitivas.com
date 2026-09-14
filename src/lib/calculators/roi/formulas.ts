import { roundTo, safeDivide } from '../../utils/math';
import type { RoiInput, RoiResult } from './types';

export function calculateRoi(input: RoiInput): RoiResult {
  const { initialInvestment, finalReturn } = input;

  if (
    !Number.isFinite(initialInvestment) ||
    !Number.isFinite(finalReturn) ||
    initialInvestment <= 0 ||
    finalReturn < 0
  ) {
    return {
      initialInvestment: 0,
      finalReturn: 0,
      netProfit: 0,
      roiPercentage: 0,
      roiMultiple: 0,
      isValid: false,
      errorMessage: 'Initial investment must be greater than 0 and final return must be non-negative.',
    };
  }

  const netProfit = finalReturn - initialInvestment;
  const roiPercentage = safeDivide(netProfit, initialInvestment, 0) * 100;
  const roiMultiple = safeDivide(finalReturn, initialInvestment, 0);

  return {
    initialInvestment: roundTo(initialInvestment, 2),
    finalReturn: roundTo(finalReturn, 2),
    netProfit: roundTo(netProfit, 2),
    roiPercentage: roundTo(roiPercentage, 2),
    roiMultiple: roundTo(roiMultiple, 2),
    isValid: true,
  };
}
