import { z } from 'zod';

export const commissionSchema = z.object({
  saleAmount: z.number().min(0, 'Sale amount must be 0 or greater'),
  commissionRate: z.number().min(0, 'Commission rate must be 0 or greater'),
  baseSalary: z.number().min(0, 'Base salary must be 0 or greater').optional().default(0),
});
