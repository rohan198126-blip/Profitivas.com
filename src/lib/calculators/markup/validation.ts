import { z } from 'zod';

export const standardMarkupSchema = z.object({
  cost: z
    .number()
    .min(0, 'Cost cannot be negative')
    .max(1_000_000_000, 'Cost exceeds supported threshold'),
  revenue: z
    .number()
    .min(0, 'Selling price cannot be negative')
    .max(1_000_000_000, 'Selling price exceeds supported threshold'),
});

export const targetMarkupSchema = z.object({
  cost: z
    .number()
    .min(0, 'Cost cannot be negative')
    .max(1_000_000_000, 'Cost exceeds supported threshold'),
  targetMarkup: z
    .number()
    .min(0, 'Target markup must be a non-negative percentage')
    .max(100_000, 'Target markup exceeds supported threshold'),
});
