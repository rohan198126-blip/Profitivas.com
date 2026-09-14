import { roundTo, safeDivide } from '../../utils/math';
import type { BreakEvenInput, BreakEvenResult } from './types';

export function calculateBreakEven(input: BreakEvenInput): BreakEvenResult {
  const { fixedCosts, pricePerUnit, variableCostPerUnit } = input;

  if (
    !Number.isFinite(fixedCosts) ||
    !Number.isFinite(pricePerUnit) ||
    !Number.isFinite(variableCostPerUnit) ||
    fixedCosts < 0 ||
    pricePerUnit <= 0 ||
    variableCostPerUnit < 0
  ) {
    return {
      fixedCosts: 0,
      pricePerUnit: 0,
      variableCostPerUnit: 0,
      contributionMargin: 0,
      contributionMarginRatio: 0,
      breakEvenUnits: 0,
      breakEvenRevenue: 0,
      isValid: false,
      errorMessage: 'Fixed costs must be >= 0, price per unit must be > 0, and variable cost must be >= 0.',
    };
  }

  const contributionMargin = pricePerUnit - variableCostPerUnit;

  if (contributionMargin <= 0) {
    return {
      fixedCosts: roundTo(fixedCosts, 2),
      pricePerUnit: roundTo(pricePerUnit, 2),
      variableCostPerUnit: roundTo(variableCostPerUnit, 2),
      contributionMargin: roundTo(contributionMargin, 2),
      contributionMarginRatio: 0,
      breakEvenUnits: 0,
      breakEvenRevenue: 0,
      isValid: false,
      errorMessage: 'Unit price must be strictly greater than variable cost per unit to break even.',
    };
  }

  const contributionMarginRatio = safeDivide(contributionMargin, pricePerUnit, 0) * 100;
  const breakEvenUnits = fixedCosts / contributionMargin;
  const breakEvenRevenue = breakEvenUnits * pricePerUnit;

  return {
    fixedCosts: roundTo(fixedCosts, 2),
    pricePerUnit: roundTo(pricePerUnit, 2),
    variableCostPerUnit: roundTo(variableCostPerUnit, 2),
    contributionMargin: roundTo(contributionMargin, 2),
    contributionMarginRatio: roundTo(contributionMarginRatio, 2),
    breakEvenUnits: roundTo(breakEvenUnits, 2),
    breakEvenRevenue: roundTo(breakEvenRevenue, 2),
    isValid: true,
  };
}
