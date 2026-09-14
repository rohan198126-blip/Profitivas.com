import { z } from 'zod';

export const cacSchema = z.object({
  acquisitionCosts: z.number().min(0, 'Acquisition costs must be 0 or greater'),
  newCustomers: z.number().positive('New customers acquired must be greater than 0'),
});
