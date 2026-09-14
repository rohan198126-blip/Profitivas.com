import type {
  CalculatorContent,
  CalculatorMeta,
  CategoryInfo,
} from './types';
import { profitMarginContent } from './profit-margin/config';
import { markupContent } from './markup/config';
import { sellingPriceContent } from './selling-price/config';
import { discountContent } from './discount/config';
import { grossProfitContent } from './gross-profit/config';
import { breakEvenContent } from './break-even/config';
import { targetProfitContent } from './target-profit/config';
import { revenueContent } from './revenue/config';
import { commissionContent } from './commission/config';
import { roiContent } from './roi/config';
import { roasContent } from './roas/config';
import { cacContent } from './cac/config';
import { ltvContent } from './ltv/config';
import { ltvCacContent } from './ltv-cac/config';
import { conversionRateContent } from './conversion-rate/config';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'pricing-profit',
    name: 'Pricing & Profit',
    description: 'Optimize margins, product pricing, markups, and profit yields.',
  },
  {
    id: 'business',
    name: 'Business Finance',
    description: 'Plan break-even points, revenue targets, commissions, and investment returns.',
  },
  {
    id: 'marketing',
    name: 'Marketing & Growth',
    description: 'Evaluate acquisition costs, customer lifetime value, and marketing ROI.',
  },
];

/**
 * Full platform catalog of the 15 core business calculators.
 * All 15 calculators are active, fully implemented, and validated.
 */
export const CALCULATOR_CATALOG: CalculatorMeta[] = [
  // Pricing & Profit
  profitMarginContent.meta,
  markupContent.meta,
  sellingPriceContent.meta,
  discountContent.meta,
  grossProfitContent.meta,

  // Business Finance
  breakEvenContent.meta,
  targetProfitContent.meta,
  revenueContent.meta,
  commissionContent.meta,
  roiContent.meta,

  // Marketing & Growth
  roasContent.meta,
  cacContent.meta,
  ltvContent.meta,
  ltvCacContent.meta,
  conversionRateContent.meta,
];

/**
 * Active calculator content map.
 * Populated for all 15 core calculators.
 */
const ACTIVE_CALCULATORS_CONTENT: Record<string, CalculatorContent> = {
  'profit-margin-calculator': profitMarginContent,
  'markup-calculator': markupContent,
  'selling-price-calculator': sellingPriceContent,
  'discount-calculator': discountContent,
  'gross-profit-calculator': grossProfitContent,
  'break-even-calculator': breakEvenContent,
  'target-profit-calculator': targetProfitContent,
  'revenue-calculator': revenueContent,
  'commission-calculator': commissionContent,
  'roi-calculator': roiContent,
  'roas-calculator': roasContent,
  'cac-calculator': cacContent,
  'ltv-calculator': ltvContent,
  'ltv-cac-calculator': ltvCacContent,
  'conversion-rate-calculator': conversionRateContent,
};

/**
 * Returns only active, fully implemented calculators.
 * Used for dynamic routing (getStaticPaths) and XML sitemap generation.
 */
export function getActiveCalculators(): CalculatorContent[] {
  return Object.values(ACTIVE_CALCULATORS_CONTENT);
}

/**
 * Returns only active calculator metadata.
 */
export function getActiveCalculatorsMeta(): CalculatorMeta[] {
  return CALCULATOR_CATALOG.filter((c) => c.status === 'active');
}

/**
 * Returns all calculators in the catalog.
 * Used for the directory overview.
 */
export function getAllCalculators(): CalculatorMeta[] {
  return CALCULATOR_CATALOG;
}

/**
 * Returns the full content for an active calculator by slug.
 */
export function getCalculatorContentBySlug(slug: string): CalculatorContent | undefined {
  return ACTIVE_CALCULATORS_CONTENT[slug];
}

/**
 * Returns related calculator metadata for given slugs.
 */
export function getRelatedCalculators(relatedSlugs: string[]): CalculatorMeta[] {
  return CALCULATOR_CATALOG.filter((c) => relatedSlugs.includes(c.slug));
}
