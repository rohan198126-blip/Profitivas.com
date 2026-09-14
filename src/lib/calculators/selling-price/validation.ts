import { z } from 'zod';

export const marginModeSchema = z.object({
  cost: z.number().min(0, 'Cost must be non-negative'),
  targetMargin: z.number().min(0, 'Margin must be non-negative').max(99.99, 'Margin must be less than 100%'),
});

export const markupModeSchema = z.object({
  cost: z.number().min(0, 'Cost must be non-negative'),
  targetMarkup: z.number().min(0, 'Markup must be non-negative'),
});
