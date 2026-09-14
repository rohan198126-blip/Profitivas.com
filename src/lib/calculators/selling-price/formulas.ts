import { roundTo, safeDivide } from '../../utils/math';
import type { MarginModeInput, MarkupModeInput, SellingPriceResult } from './types';

export function calculateSellingPriceFromMargin(input: MarginModeInput): SellingPriceResult {
  const { cost, targetMargin } = input;

  if (!Number.isFinite(cost) || !Number.isFinite(targetMargin) || cost < 0) {
    return {
      cost: 0,
      sellingPrice: 0,
      profit: 0,
      margin: 0,
      markup: 0,
      mode: 'margin',
      isValid: false,
      errorMessage: 'Cost must be non-negative and target margin must be valid.',
    };
  }

  if (targetMargin >= 100) {
    return {
      cost: roundTo(cost, 2),
      sellingPrice: 0,
      profit: 0,
      margin: targetMargin,
      markup: 0,
      mode: 'margin',
      isValid: false,
      errorMessage: 'Target margin must be less than 100%. A 100% margin requires an infinite selling price.',
    };
  }

  const marginDecimal = targetMargin / 100;
  const divisor = 1 - marginDecimal;
  const sellingPrice = safeDivide(cost, divisor, 0);
  const profit = sellingPrice - cost;
  const markup = cost > 0 ? (profit / cost) * 100 : 0;

  return {
    cost: roundTo(cost, 2),
    sellingPrice: roundTo(sellingPrice, 2),
    profit: roundTo(profit, 2),
    margin: roundTo(targetMargin, 2),
    markup: roundTo(markup, 2),
    mode: 'margin',
    isValid: true,
  };
}

export function calculateSellingPriceFromMarkup(input: MarkupModeInput): SellingPriceResult {
  const { cost, targetMarkup } = input;

  if (!Number.isFinite(cost) || !Number.isFinite(targetMarkup) || cost < 0 || targetMarkup < 0) {
    return {
      cost: 0,
      sellingPrice: 0,
      profit: 0,
      margin: 0,
      markup: 0,
      mode: 'markup',
      isValid: false,
      errorMessage: 'Cost and markup percentage must be valid non-negative numbers.',
    };
  }

  const markupDecimal = targetMarkup / 100;
  const sellingPrice = cost * (1 + markupDecimal);
  const profit = sellingPrice - cost;
  const margin = sellingPrice > 0 ? safeDivide(profit, sellingPrice, 0) * 100 : 0;

  return {
    cost: roundTo(cost, 2),
    sellingPrice: roundTo(sellingPrice, 2),
    profit: roundTo(profit, 2),
    margin: roundTo(margin, 2),
    markup: roundTo(targetMarkup, 2),
    mode: 'markup',
    isValid: true,
  };
}
