export interface RoasInput {
  revenue: number;
  adSpend: number;
}

export interface RoasResult {
  revenue: number;
  adSpend: number;
  roasMultiple: number;
  roasPercentage: number;
  netReturn: number;
  isValid: boolean;
  errorMessage?: string;
}
