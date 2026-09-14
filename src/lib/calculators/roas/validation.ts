import { z } from 'zod';

export const roasSchema = z.object({
  revenue: z.number().min(0, 'Revenue must be 0 or greater'),
  adSpend: z.number().positive('Ad spend must be greater than 0'),
});
