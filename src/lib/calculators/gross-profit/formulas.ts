import { roundTo, safeDivide } from '../../utils/math';
import type { GrossProfitInput, GrossProfitResult } from './types';

export function calculateGrossProfit(input: GrossProfitInput): GrossProfitResult {
  const { revenue, cogs } = input;

  if (!Number.isFinite(revenue) || !Number.isFinite(cogs) || revenue < 0 || cogs < 0) {
    return {
      revenue: 0,
      cogs: 0,
      grossProfit: 0,
      grossMargin: 0,
      markup: 0,
      isValid: false,
      errorMessage: 'Revenue and Cost of Goods Sold (COGS) must be non-negative numbers.',
    };
  }

  const grossProfit = revenue - cogs;
  const grossMargin = revenue > 0 ? safeDivide(grossProfit, revenue, 0) * 100 : 0;
  const markup = cogs > 0 ? safeDivide(grossProfit, cogs, 0) * 100 : 0;

  return {
    revenue: roundTo(revenue, 2),
    cogs: roundTo(cogs, 2),
    grossProfit: roundTo(grossProfit, 2),
    grossMargin: roundTo(grossMargin, 2),
    markup: roundTo(markup, 2),
    isValid: true,
  };
}
