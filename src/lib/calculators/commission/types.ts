export interface CommissionInput {
  saleAmount: number;
  commissionRate: number;
  baseSalary?: number;
}

export interface CommissionResult {
  saleAmount: number;
  commissionRate: number;
  baseSalary: number;
  commissionAmount: number;
  totalWithCommission: number;
  totalEarnings: number;
  isValid: boolean;
  errorMessage?: string;
}
