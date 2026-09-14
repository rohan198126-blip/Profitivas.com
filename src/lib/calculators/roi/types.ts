export interface RoiInput {
  initialInvestment: number;
  finalReturn: number;
}

export interface RoiResult {
  initialInvestment: number;
  finalReturn: number;
  netProfit: number;
  roiPercentage: number;
  roiMultiple: number;
  isValid: boolean;
  errorMessage?: string;
}
