export interface GrossProfitInput {
  revenue: number;
  cogs: number;
}

export interface GrossProfitResult {
  revenue: number;
  cogs: number;
  grossProfit: number;
  grossMargin: number;
  markup: number;
  isValid: boolean;
  errorMessage?: string;
}
