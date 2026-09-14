import type {
  CalculatorContent,
  CalculatorMeta,
  CategoryInfo,
} from './types';
import { profitMarginContent } from './profit-margin/config';
import { markupContent } from './markup/config';

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
 * Full platform catalog of initial planned calculators.
 * Explicit status ('active' | 'planned') ensures only completed calculators generate
 * routes and appear in search engine indexation.
 */
export const CALCULATOR_CATALOG: CalculatorMeta[] = [
  // Pricing & Profit
  profitMarginContent.meta,
  markupContent.meta,
  {
    id: 'selling-price',
    slug: 'selling-price-calculator',
    name: 'Selling Price Calculator',
    shortName: 'Selling Price',
    category: 'pricing-profit',
    status: 'planned',
    tagline: 'Determine the optimal unit selling price from cost and target margin.',
    description: 'Calculate the necessary selling price to cover unit costs and deliver required profitability.',
    seoTitle: 'Selling Price Calculator - Determine Product & Service Pricing',
    seoDescription: 'Calculate optimal selling price based on cost of goods and target profit margin.',
  },
  {
    id: 'discount',
    slug: 'discount-calculator',
    name: 'Discount Calculator',
    shortName: 'Discount',
    category: 'pricing-profit',
    status: 'planned',
    tagline: 'Calculate discounted sale prices, savings amounts, and effective reductions.',
    description: 'Find final price after percentage or fixed discounts, including multi-tier discounts.',
    seoTitle: 'Discount Calculator - Calculate Sale Price and Total Savings',
    seoDescription: 'Quickly calculate sale price, dollar savings, and percentage discounts.',
  },
  {
    id: 'gross-profit',
    slug: 'gross-profit-calculator',
    name: 'Gross Profit Calculator',
    shortName: 'Gross Profit',
    category: 'pricing-profit',
    status: 'planned',
    tagline: 'Calculate gross profit dollars and margin from total revenue and COGS.',
    description: 'Analyze top-line gross profitability across single products or total business sales.',
    seoTitle: 'Gross Profit Calculator - Revenue, Cost of Goods & Profit',
    seoDescription: 'Calculate gross profit and gross margin from total sales revenue and COGS.',
  },

  // Business Finance
  {
    id: 'break-even',
    slug: 'break-even-calculator',
    name: 'Break-Even Calculator',
    shortName: 'Break-Even',
    category: 'business',
    status: 'planned',
    tagline: 'Find unit volume and revenue needed to cover all fixed and variable costs.',
    description: 'Calculate the exact point where revenue equals total costs and profit begins.',
    seoTitle: 'Break-Even Calculator - Calculate Break-Even Units & Revenue',
    seoDescription: 'Find your break-even point in units and sales dollars using fixed and variable costs.',
  },
  {
    id: 'target-profit',
    slug: 'target-profit-calculator',
    name: 'Target Profit Calculator',
    shortName: 'Target Profit',
    category: 'business',
    status: 'planned',
    tagline: 'Calculate required sales volume to reach a specific profit goal.',
    description: 'Determine required sales units and revenue to achieve target operating income.',
    seoTitle: 'Target Profit Calculator - Required Sales for Profit Goals',
    seoDescription: 'Calculate units and revenue needed to hit your target business profit.',
  },
  {
    id: 'revenue',
    slug: 'revenue-calculator',
    name: 'Revenue Calculator',
    shortName: 'Revenue',
    category: 'business',
    status: 'planned',
    tagline: 'Calculate total revenue from price and unit sales volume.',
    description: 'Project total sales revenue, average transaction value, and growth trajectories.',
    seoTitle: 'Revenue Calculator - Project Total Sales and Volume',
    seoDescription: 'Calculate projected business revenue across price points and sales volumes.',
  },
  {
    id: 'commission',
    slug: 'commission-calculator',
    name: 'Commission Calculator',
    shortName: 'Commission',
    category: 'business',
    status: 'planned',
    tagline: 'Calculate sales commission earnings and tiered payouts.',
    description: 'Calculate total compensation, commission rate percentages, and tiered sales bonuses.',
    seoTitle: 'Commission Calculator - Sales Commission & Payout Rates',
    seoDescription: 'Calculate sales commission earnings, percentage payouts, and tiered structures.',
  },
  {
    id: 'roi',
    slug: 'roi-calculator',
    name: 'ROI Calculator',
    shortName: 'ROI',
    category: 'business',
    status: 'planned',
    tagline: 'Calculate return on investment percentage and annualized gain.',
    description: 'Evaluate the profitability of business investments, capital projects, or campaigns.',
    seoTitle: 'ROI Calculator - Return on Investment Percentage & Gain',
    seoDescription: 'Calculate return on investment (ROI) percentage, net profit, and annualized returns.',
  },

  // Marketing & Growth
  {
    id: 'roas',
    slug: 'roas-calculator',
    name: 'ROAS Calculator',
    shortName: 'ROAS',
    category: 'marketing',
    status: 'planned',
    tagline: 'Calculate return on ad spend and campaign profitability.',
    description: 'Determine gross advertising revenue generated for each dollar invested in paid ads.',
    seoTitle: 'ROAS Calculator - Return on Ad Spend & Campaign Profit',
    seoDescription: 'Calculate return on ad spend (ROAS) and advertising profitability for paid campaigns.',
  },
  {
    id: 'cac',
    slug: 'cac-calculator',
    name: 'CAC Calculator',
    shortName: 'CAC',
    category: 'marketing',
    status: 'planned',
    tagline: 'Calculate customer acquisition cost across marketing channels.',
    description: 'Measure the true blended and paid acquisition cost per new acquired customer.',
    seoTitle: 'CAC Calculator - Customer Acquisition Cost Analysis',
    seoDescription: 'Calculate customer acquisition cost (CAC) from total sales and marketing spend.',
  },
  {
    id: 'ltv',
    slug: 'ltv-calculator',
    name: 'LTV Calculator',
    shortName: 'LTV',
    category: 'marketing',
    status: 'planned',
    tagline: 'Calculate customer lifetime value and retention revenue.',
    description: 'Estimate total gross revenue or profit a customer generates throughout their relationship.',
    seoTitle: 'Customer Lifetime Value (LTV) Calculator',
    seoDescription: 'Calculate customer lifetime value (LTV / CLV) based on purchase frequency and retention.',
  },
  {
    id: 'ltv-cac',
    slug: 'ltv-cac-calculator',
    name: 'LTV:CAC Ratio Calculator',
    shortName: 'LTV:CAC',
    category: 'marketing',
    status: 'planned',
    tagline: 'Assess unit economics sustainability and growth efficiency.',
    description: 'Benchmark your customer lifetime value against customer acquisition cost.',
    seoTitle: 'LTV:CAC Ratio Calculator - Unit Economics Benchmark',
    seoDescription: 'Calculate your LTV:CAC ratio to evaluate customer acquisition efficiency and sustainability.',
  },
  {
    id: 'conversion-rate',
    slug: 'conversion-rate-calculator',
    name: 'Conversion Rate Calculator',
    shortName: 'Conversion Rate',
    category: 'marketing',
    status: 'planned',
    tagline: 'Calculate conversion rate percentages and required visitors.',
    description: 'Analyze website and funnel conversion rates across total visitors and goal completions.',
    seoTitle: 'Conversion Rate Calculator - Calculate Conversion % & Leads',
    seoDescription: 'Calculate conversion rates for web traffic, ecommerce checkouts, and landing pages.',
  },
];

/**
 * Active calculator content map.
 * Only populated for calculators whose implementation is complete and verified.
 */
const ACTIVE_CALCULATORS_CONTENT: Record<string, CalculatorContent> = {
  'profit-margin-calculator': profitMarginContent,
  'markup-calculator': markupContent,
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
 * Returns all calculators in the catalog (active and planned).
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
