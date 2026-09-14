import { z } from 'zod';

export const standardMarginSchema = z.object({
  cost: z
    .number()
    .min(0, 'Cost cannot be negative')
    .max(1_000_000_000, 'Cost exceeds supported threshold'),
  revenue: z
    .number()
    .min(0, 'Selling price cannot be negative')
    .max(1_000_000_000, 'Selling price exceeds supported threshold'),
});

export const targetMarginSchema = z.object({
  cost: z
    .number()
    .min(0, 'Cost cannot be negative')
    .max(1_000_000_000, 'Cost exceeds supported threshold'),
  targetMargin: z
    .number()
    .lt(100, 'Target margin must be strictly less than 100%')
    .min(-1000, 'Target margin cannot be lower than -1000%'),
});
