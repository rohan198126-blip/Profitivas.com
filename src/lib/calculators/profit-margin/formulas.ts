import { roundTo, safeDivide } from '../../utils/math';
import type { ProfitMarginResult, StandardMarginInput, TargetMarginInput } from './types';

/**
 * Calculates profit margin, markup, and gross profit from cost and revenue (selling price).
 *
 * Formulas:
 * - Gross Profit = Revenue - Cost
 * - Profit Margin (%) = ((Revenue - Cost) / Revenue) * 100
 * - Markup (%) = ((Revenue - Cost) / Cost) * 100
 */
export function calculateStandardMargin(input: StandardMarginInput): ProfitMarginResult {
  const { cost, revenue } = input;

  if (!Number.isFinite(cost) || !Number.isFinite(revenue) || cost < 0 || revenue < 0) {
    return {
      cost: 0,
      revenue: 0,
      profit: 0,
      margin: 0,
      markup: 0,
      returnOnCost: 0,
      isLoss: false,
      isValid: false,
      errorMessage: 'Cost and revenue must be valid positive numbers.',
    };
  }

  const profit = revenue - cost;
  const isLoss = profit < 0;

  // Margin calculation: (Profit / Revenue) * 100
  let margin = 0;
  if (revenue > 0) {
    margin = (profit / revenue) * 100;
  } else if (cost > 0) {
    // Zero revenue but positive cost -> 100% loss
    margin = -100;
  }

  // Markup calculation: (Profit / Cost) * 100
  let markup = 0;
  if (cost > 0) {
    markup = (profit / cost) * 100;
  } else if (revenue > 0) {
    // Free cost, any revenue is infinite markup; cap display to 100% or note
    markup = 100;
  }

  const returnOnCost = cost > 0 ? (profit / cost) * 100 : 0;

  return {
    cost: roundTo(cost, 2),
    revenue: roundTo(revenue, 2),
    profit: roundTo(profit, 2),
    margin: roundTo(margin, 2),
    markup: roundTo(markup, 2),
    returnOnCost: roundTo(returnOnCost, 2),
    isLoss,
    isValid: true,
  };
}

/**
 * Reverse calculation: Given a Cost and a Target Profit Margin %,
 * calculates the required Selling Price, resulting Profit, and Markup.
 *
 * Formula:
 * - Selling Price = Cost / (1 - (Target Margin / 100))
 * - Gross Profit = Selling Price - Cost
 * - Markup = (Profit / Cost) * 100 = (Target Margin / (100 - Target Margin)) * 100
 */
export function calculateFromTargetMargin(input: TargetMarginInput): ProfitMarginResult {
  const { cost, targetMargin } = input;

  if (!Number.isFinite(cost) || !Number.isFinite(targetMargin) || cost < 0) {
    return {
      cost: 0,
      revenue: 0,
      profit: 0,
      margin: 0,
      markup: 0,
      returnOnCost: 0,
      isLoss: false,
      isValid: false,
      errorMessage: 'Cost must be non-negative and margin must be a valid number.',
    };
  }

  // Target margin must be strictly less than 100%
  if (targetMargin >= 100) {
    return {
      cost: roundTo(cost, 2),
      revenue: 0,
      profit: 0,
      margin: targetMargin,
      markup: 0,
      returnOnCost: 0,
      isLoss: false,
      isValid: false,
      errorMessage: 'Target margin must be less than 100%. A 100% margin requires an infinite selling price.',
    };
  }

  const marginDecimal = targetMargin / 100;
  const divisor = 1 - marginDecimal;

  const revenue = safeDivide(cost, divisor, 0);
  const profit = revenue - cost;
  const isLoss = profit < 0;

  const markup = cost > 0 ? (profit / cost) * 100 : 0;
  const returnOnCost = markup;

  return {
    cost: roundTo(cost, 2),
    revenue: roundTo(revenue, 2),
    profit: roundTo(profit, 2),
    margin: roundTo(targetMargin, 2),
    markup: roundTo(markup, 2),
    returnOnCost: roundTo(returnOnCost, 2),
    isLoss,
    isValid: true,
  };
}
