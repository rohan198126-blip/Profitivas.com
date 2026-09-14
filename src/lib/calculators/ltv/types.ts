export interface LtvInput {
  averagePurchaseValue: number;
  purchaseFrequency: number;
  customerLifespan: number;
}

export interface LtvResult {
  averagePurchaseValue: number;
  purchaseFrequency: number;
  customerLifespan: number;
  annualValue: number;
  ltv: number;
  isValid: boolean;
  errorMessage?: string;
}
