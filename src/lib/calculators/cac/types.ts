export interface CacInput {
  acquisitionCosts: number;
  newCustomers: number;
}

export interface CacResult {
  acquisitionCosts: number;
  newCustomers: number;
  cac: number;
  isValid: boolean;
  errorMessage?: string;
}
