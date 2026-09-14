import { z } from 'zod';

export const revenueSchema = z.object({
  unitsSold: z.number().min(0, 'Units sold must be 0 or greater'),
  pricePerUnit: z.number().min(0, 'Price per unit must be 0 or greater'),
});
