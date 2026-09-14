export interface StandardDiscountInput {
  originalPrice: number;
  discountPercent: number;
}

export interface ReverseDiscountInput {
  originalPrice: number;
  finalPrice: number;
}

export interface DiscountResult {
  originalPrice: number;
  discountPercent: number;
  discountAmount: number;
  finalPrice: number;
  mode: 'standard' | 'reverse';
  isValid: boolean;
  errorMessage?: string;
}
