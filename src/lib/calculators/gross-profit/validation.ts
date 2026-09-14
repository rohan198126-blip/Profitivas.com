import { z } from 'zod';

export const grossProfitSchema = z.object({
  revenue: z.number().min(0, 'Revenue must be 0 or greater'),
  cogs: z.number().min(0, 'COGS must be 0 or greater'),
});
