import { z } from 'zod';

export const ltvSchema = z.object({
  averagePurchaseValue: z.number().min(0, 'Average purchase value must be 0 or greater'),
  purchaseFrequency: z.number().min(0, 'Purchase frequency must be 0 or greater'),
  customerLifespan: z.number().min(0, 'Customer lifespan must be 0 or greater'),
});
