import { z } from 'zod';

export const discountSchema = z.object({
  originalPrice: z.number().min(0, 'Original price must be positive'),
  discountPercent: z.number().min(0, 'Discount cannot be negative').max(100, 'Discount cannot exceed 100%'),
});

export const reverseDiscountSchema = z.object({
  originalPrice: z.number().min(0, 'Original price must be positive'),
  finalPrice: z.number().min(0, 'Final price must be positive'),
});
