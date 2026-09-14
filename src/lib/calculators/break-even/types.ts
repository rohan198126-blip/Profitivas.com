export interface BreakEvenInput {
  fixedCosts: number;
  pricePerUnit: number;
  variableCostPerUnit: number;
}

export interface BreakEvenResult {
  fixedCosts: number;
  pricePerUnit: number;
  variableCostPerUnit: number;
  contributionMargin: number;
  contributionMarginRatio: number;
  breakEvenUnits: number;
  breakEvenRevenue: number;
  isValid: boolean;
  errorMessage?: string;
}
