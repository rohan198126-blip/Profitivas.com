import { roundTo, safeDivide } from '../../utils/math';
import type { TargetProfitInput, TargetProfitResult } from './types';

export function calculateTargetProfit(input: TargetProfitInput): TargetProfitResult {
  const { fixedCosts, targetProfit, pricePerUnit, variableCostPerUnit } = input;

  if (
    !Number.isFinite(fixedCosts) ||
    !Number.isFinite(targetProfit) ||
    !Number.isFinite(pricePerUnit) ||
    !Number.isFinite(variableCostPerUnit) ||
    fixedCosts < 0 ||
    targetProfit < 0 ||
    pricePerUnit <= 0 ||
    variableCostPerUnit < 0
  ) {
    return {
      fixedCosts: 0,
      targetProfit: 0,
      pricePerUnit: 0,
      variableCostPerUnit: 0,
      contributionMargin: 0,
      contributionMarginRatio: 0,
      requiredUnits: 0,
      requiredRevenue: 0,
      isValid: false,
      errorMessage: 'Fixed costs and target profit must be >= 0, price must be > 0, and variable cost must be >= 0.',
    };
  }

  const contributionMargin = pricePerUnit - variableCostPerUnit;

  if (contributionMargin <= 0) {
    return {
      fixedCosts: roundTo(fixedCosts, 2),
      targetProfit: roundTo(targetProfit, 2),
      pricePerUnit: roundTo(pricePerUnit, 2),
      variableCostPerUnit: roundTo(variableCostPerUnit, 2),
      contributionMargin: roundTo(contributionMargin, 2),
      contributionMarginRatio: 0,
      requiredUnits: 0,
      requiredRevenue: 0,
      isValid: false,
      errorMessage: 'Selling price must be strictly greater than variable cost per unit to generate profit.',
    };
  }

  const contributionMarginRatio = safeDivide(contributionMargin, pricePerUnit, 0) * 100;
  const requiredUnits = (fixedCosts + targetProfit) / contributionMargin;
  const requiredRevenue = requiredUnits * pricePerUnit;

  return {
    fixedCosts: roundTo(fixedCosts, 2),
    targetProfit: roundTo(targetProfit, 2),
    pricePerUnit: roundTo(pricePerUnit, 2),
    variableCostPerUnit: roundTo(variableCostPerUnit, 2),
    contributionMargin: roundTo(contributionMargin, 2),
    contributionMarginRatio: roundTo(contributionMarginRatio, 2),
    requiredUnits: roundTo(requiredUnits, 2),
    requiredRevenue: roundTo(requiredRevenue, 2),
    isValid: true,
  };
}
