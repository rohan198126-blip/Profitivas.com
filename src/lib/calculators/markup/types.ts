export type MarkupMode = 'standard' | 'target-markup';

export interface StandardMarkupInput {
  cost: number;
  revenue: number;
}

export interface TargetMarkupInput {
  cost: number;
  targetMarkup: number; // in percent (e.g. 50 for 50%)
}

export interface MarkupResult {
  cost: number;
  revenue: number;
  profit: number;
  markup: number;       // Markup (%)
  margin: number;       // Gross Profit Margin (%)
  returnOnCost: number; // (Profit / Cost) * 100 (mathematically identical to Markup)
  isLoss: boolean;
  isZeroCost: boolean;
  isValid: boolean;
  errorMessage?: string;
}
