import { roundTo } from '../../utils/math';
import type { CommissionInput, CommissionResult } from './types';

export function calculateCommission(input: CommissionInput): CommissionResult {
  const { saleAmount, commissionRate, baseSalary = 0 } = input;

  if (
    !Number.isFinite(saleAmount) ||
    !Number.isFinite(commissionRate) ||
    !Number.isFinite(baseSalary) ||
    saleAmount < 0 ||
    commissionRate < 0 ||
    baseSalary < 0
  ) {
    return {
      saleAmount: 0,
      commissionRate: 0,
      baseSalary: 0,
      commissionAmount: 0,
      totalWithCommission: 0,
      totalEarnings: 0,
      isValid: false,
      errorMessage: 'Sale amount, commission rate, and base salary must be non-negative numbers.',
    };
  }

  const commissionAmount = saleAmount * (commissionRate / 100);
  const totalWithCommission = saleAmount + commissionAmount;
  const totalEarnings = baseSalary + commissionAmount;

  return {
    saleAmount: roundTo(saleAmount, 2),
    commissionRate: roundTo(commissionRate, 2),
    baseSalary: roundTo(baseSalary, 2),
    commissionAmount: roundTo(commissionAmount, 2),
    totalWithCommission: roundTo(totalWithCommission, 2),
    totalEarnings: roundTo(totalEarnings, 2),
    isValid: true,
  };
}
