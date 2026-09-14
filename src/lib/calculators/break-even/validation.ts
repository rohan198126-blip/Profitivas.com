import { z } from 'zod';

export const breakEvenSchema = z.object({
  fixedCosts: z.number().min(0, 'Fixed costs must be 0 or greater'),
  pricePerUnit: z.number().positive('Price per unit must be greater than 0'),
  variableCostPerUnit: z.number().min(0, 'Variable cost per unit must be 0 or greater'),
}).refine((data) => data.pricePerUnit > data.variableCostPerUnit, {
  message: 'Unit selling price must be greater than variable cost per unit',
  path: ['pricePerUnit'],
});
