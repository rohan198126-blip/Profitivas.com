import { z } from 'zod';

export const roiSchema = z.object({
  initialInvestment: z.number().positive('Initial investment must be greater than 0'),
  finalReturn: z.number().min(0, 'Final return must be 0 or greater'),
});
