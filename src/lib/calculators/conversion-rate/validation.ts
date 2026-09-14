import { z } from 'zod';

export const conversionRateSchema = z.object({
  conversions: z.number().min(0, 'Conversions must be 0 or greater'),
  visitors: z.number().positive('Total visitors must be greater than 0'),
}).refine((data) => data.conversions <= data.visitors, {
  message: 'Conversions cannot exceed total visitors',
  path: ['conversions'],
});
