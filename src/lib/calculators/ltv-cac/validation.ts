import { z } from 'zod';

export const ltvCacSchema = z.object({
  ltv: z.number().min(0, 'Customer Lifetime Value must be 0 or greater'),
  cac: z.number().positive('Customer Acquisition Cost must be greater than 0'),
});
