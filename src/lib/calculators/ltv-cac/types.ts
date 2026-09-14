export interface LtvCacInput {
  ltv: number;
  cac: number;
}

export interface LtvCacResult {
  ltv: number;
  cac: number;
  ratio: number;
  netValue: number;
  healthStatus: string;
  isValid: boolean;
  errorMessage?: string;
}
