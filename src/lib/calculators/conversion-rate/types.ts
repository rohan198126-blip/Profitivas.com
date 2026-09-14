export interface ConversionRateInput {
  conversions: number;
  visitors: number;
}

export interface ConversionRateResult {
  conversions: number;
  visitors: number;
  conversionRate: number;
  dropOffRate: number;
  dropOffCount: number;
  isValid: boolean;
  errorMessage?: string;
}
