import { roundTo, safeDivide } from '../../utils/math';
import type { StandardDiscountInput, ReverseDiscountInput, DiscountResult } from './types';

export function calculateStandardDiscount(input: StandardDiscountInput): DiscountResult {
  const { originalPrice, discountPercent } = input;

  if (!Number.isFinite(originalPrice) || !Number.isFinite(discountPercent) || originalPrice < 0) {
    return {
      originalPrice: 0,
      discountPercent: 0,
      discountAmount: 0,
      finalPrice: 0,
      mode: 'standard',
      isValid: false,
      errorMessage: 'Original price and discount percentage must be valid positive numbers.',
    };
  }

  if (discountPercent < 0 || discountPercent > 100) {
    return {
      originalPrice: roundTo(originalPrice, 2),
      discountPercent: roundTo(discountPercent, 2),
      discountAmount: 0,
      finalPrice: 0,
      mode: 'standard',
      isValid: false,
      errorMessage: 'Discount percentage must be between 0% and 100%.',
    };
  }

  const discountAmount = originalPrice * (discountPercent / 100);
  const finalPrice = Math.max(0, originalPrice - discountAmount);

  return {
    originalPrice: roundTo(originalPrice, 2),
    discountPercent: roundTo(discountPercent, 2),
    discountAmount: roundTo(discountAmount, 2),
    finalPrice: roundTo(finalPrice, 2),
    mode: 'standard',
    isValid: true,
  };
}

export function calculateReverseDiscount(input: ReverseDiscountInput): DiscountResult {
  const { originalPrice, finalPrice } = input;

  if (!Number.isFinite(originalPrice) || !Number.isFinite(finalPrice) || originalPrice < 0 || finalPrice < 0) {
    return {
      originalPrice: 0,
      discountPercent: 0,
      discountAmount: 0,
      finalPrice: 0,
      mode: 'reverse',
      isValid: false,
      errorMessage: 'Prices must be non-negative numbers.',
    };
  }

  if (finalPrice > originalPrice) {
    return {
      originalPrice: roundTo(originalPrice, 2),
      discountPercent: 0,
      discountAmount: 0,
      finalPrice: roundTo(finalPrice, 2),
      mode: 'reverse',
      isValid: false,
      errorMessage: 'Final sale price cannot exceed the original list price.',
    };
  }

  const discountAmount = originalPrice - finalPrice;
  const discountPercent = originalPrice > 0 ? safeDivide(discountAmount, originalPrice, 0) * 100 : 0;

  return {
    originalPrice: roundTo(originalPrice, 2),
    discountPercent: roundTo(discountPercent, 2),
    discountAmount: roundTo(discountAmount, 2),
    finalPrice: roundTo(finalPrice, 2),
    mode: 'reverse',
    isValid: true,
  };
}
