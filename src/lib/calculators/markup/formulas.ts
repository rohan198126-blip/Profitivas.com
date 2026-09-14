import { roundTo, safeDivide } from '../../utils/math';
import type { MarkupResult, StandardMarkupInput, TargetMarkupInput } from './types';

/**
 * Calculates markup percentage, profit margin, and gross profit from cost and selling price.
 *
 * Formulas:
 * - Gross Profit = Selling Price - Cost
 * - Markup (%) = ((Selling Price - Cost) / Cost) * 100
 * - Profit Margin (%) = ((Selling Price - Cost) / Selling Price) * 100
 * - Return on Cost (%) = ((Selling Price - Cost) / Cost) * 100 (Identical to Markup)
 */
export function calculateStandardMarkup(input: StandardMarkupInput): MarkupResult {
  const { cost, revenue } = input;

  if (!Number.isFinite(cost) || !Number.isFinite(revenue) || cost < 0 || revenue < 0) {
    return {
      cost: 0,
      revenue: 0,
      profit: 0,
      markup: 0,
      margin: 0,
      returnOnCost: 0,
      isLoss: false,
      isZeroCost: false,
      isValid: false,
      errorMessage: 'Cost and selling price must be valid non-negative numbers.',
    };
  }

  const profit = revenue - cost;
  const isLoss = profit < 0;
  const isZeroCost = cost === 0;

  // Margin: (Profit / Selling Price) * 100
  let margin = 0;
  if (revenue > 0) {
    margin = (profit / revenue) * 100;
  } else if (cost > 0) {
    margin = -100;
  }

  // Markup: (Profit / Cost) * 100
  let markup = 0;
  let returnOnCost = 0;
  let errorMessage: string | undefined;

  if (cost > 0) {
    markup = (profit / cost) * 100;
    returnOnCost = markup;
  } else if (revenue > 0) {
    // When cost is zero and revenue is positive, markup is mathematically undefined (division by zero)
    markup = 0;
    returnOnCost = 0;
    errorMessage = 'Markup is undefined when unit cost is $0.00 (profit is 100% of price).';
  }

  return {
    cost: roundTo(cost, 2),
    revenue: roundTo(revenue, 2),
    profit: roundTo(profit, 2),
    markup: roundTo(markup, 2),
    margin: roundTo(margin, 2),
    returnOnCost: roundTo(returnOnCost, 2),
    isLoss,
    isZeroCost,
    isValid: true,
    errorMessage,
  };
}

/**
 * Reverse calculation: Given a Cost and a Target Markup %,
 * calculates the required Selling Price, resulting Gross Profit, and Profit Margin.
 *
 * Formulas:
 * - Selling Price = Cost * (1 + (Target Markup / 100))
 * - Gross Profit = Selling Price - Cost
 * - Profit Margin (%) = (Gross Profit / Selling Price) * 100
 */
export function calculateFromTargetMarkup(input: TargetMarkupInput): MarkupResult {
  const { cost, targetMarkup } = input;

  if (!Number.isFinite(cost) || !Number.isFinite(targetMarkup) || cost < 0 || targetMarkup < 0) {
    return {
      cost: 0,
      revenue: 0,
      profit: 0,
      markup: 0,
      margin: 0,
      returnOnCost: 0,
      isLoss: false,
      isZeroCost: false,
      isValid: false,
      errorMessage: 'Cost and markup percentage must be valid non-negative numbers.',
    };
  }

  const markupDecimal = targetMarkup / 100;
  const revenue = cost * (1 + markupDecimal);
  const profit = revenue - cost;
  const isLoss = profit < 0;
  const isZeroCost = cost === 0;

  let margin = 0;
  if (revenue > 0) {
    margin = safeDivide(profit, revenue, 0) * 100;
  }

  return {
    cost: roundTo(cost, 2),
    revenue: roundTo(revenue, 2),
    profit: roundTo(profit, 2),
    markup: roundTo(targetMarkup, 2),
    margin: roundTo(margin, 2),
    returnOnCost: roundTo(targetMarkup, 2),
    isLoss,
    isZeroCost,
    isValid: true,
  };
}
