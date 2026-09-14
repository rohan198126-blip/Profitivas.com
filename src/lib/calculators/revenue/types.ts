export interface RevenueInput {
  unitsSold: number;
  pricePerUnit: number;
}

export interface RevenueResult {
  unitsSold: number;
  pricePerUnit: number;
  totalRevenue: number;
  isValid: boolean;
  errorMessage?: string;
}
