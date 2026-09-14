export interface TargetProfitInput {
  fixedCosts: number;
  targetProfit: number;
  pricePerUnit: number;
  variableCostPerUnit: number;
}

export interface TargetProfitResult {
  fixedCosts: number;
  targetProfit: number;
  pricePerUnit: number;
  variableCostPerUnit: number;
  contributionMargin: number;
  contributionMarginRatio: number;
  requiredUnits: number;
  requiredRevenue: number;
  isValid: boolean;
  errorMessage?: string;
}
