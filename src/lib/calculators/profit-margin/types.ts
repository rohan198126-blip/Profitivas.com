export type ProfitMarginMode = 'standard' | 'target-margin';

export interface StandardMarginInput {
  cost: number;
  revenue: number;
}

export interface TargetMarginInput {
  cost: number;
  targetMargin: number; // in percent (e.g. 40 for 40%)
}

export interface ProfitMarginResult {
  cost: number;
  revenue: number;
  profit: number;
  margin: number;       // Gross Profit Margin (%)
  markup: number;       // Markup (%)
  returnOnCost: number; // (Profit / Cost) * 100
  isLoss: boolean;
  isValid: boolean;
  errorMessage?: string;
}
