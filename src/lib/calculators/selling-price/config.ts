import type { CalculatorContent } from '../types';

export const sellingPriceContent: CalculatorContent = {
  meta: {
    id: 'selling-price',
    slug: 'selling-price-calculator',
    name: 'Selling Price Calculator',
    shortName: 'Selling Price',
    category: 'pricing-profit',
    status: 'active',
    tagline: 'Calculate required selling price based on cost and target profit margin or markup.',
    description: 'Determine the exact selling price needed to cover product cost and deliver your target profit margin or markup percentage.',
    seoTitle: 'Selling Price Calculator — Find Your Required Selling Price',
    seoDescription: 'Calculate required selling price based on unit cost and desired profit margin or markup. Instant, client-side pricing calculator for retail and ecommerce.',
    featured: true,
  },
  formulas: [
    {
      title: 'Selling Price from Target Margin',
      formula: 'Selling Price = Cost ÷ (1 - (Target Margin ÷ 100))',
      plainText: 'Divide unit cost by 1 minus your decimal target margin.',
      explanation: 'Use this formula when you know your acquisition cost and want to ensure a specific percentage of final customer revenue is retained as profit.',
    },
    {
      title: 'Selling Price from Target Markup',
      formula: 'Selling Price = Cost × (1 + (Target Markup ÷ 100))',
      plainText: 'Multiply unit cost by 1 plus your decimal markup percentage.',
      explanation: 'The standard cost-plus formula: adds a direct percentage markup on top of your unit cost to establish the retail price.',
    },
    {
      title: 'Gross Profit ($)',
      formula: 'Gross Profit = Selling Price - Cost',
      plainText: 'Subtract unit cost from final selling price.',
      explanation: 'The actual dollar earnings generated per unit sold before operating overhead.',
    },
  ],
  workedExample: {
    title: 'Retail Pricing Example ($40 Cost with 60% Margin Goal)',
    scenario: 'An ecommerce brand manufactures an item for $40.00 and targets a 60% profit margin to cover ad spend and overhead.',
    inputs: {
      'Unit Cost': '$40.00',
      'Target Margin': '60.00%',
    },
    steps: [
      'Decimal Margin = 60 ÷ 100 = 0.60',
      'Divisor = 1 - 0.60 = 0.40',
      'Selling Price = $40.00 ÷ 0.40 = $100.00',
      'Gross Profit = $100.00 - $40.00 = $60.00',
      'Resulting Markup = ($60.00 ÷ $40.00) × 100 = 150.00%',
    ],
    results: {
      'Required Selling Price': '$100.00',
      'Gross Profit': '$60.00',
      'Profit Margin': '60.00%',
      'Markup': '150.00%',
    },
    takeaway: 'To earn a 60% margin on a $40 product, you must price it at $100. Simply adding 60% ($24) to the cost gives $64, which only achieves a 37.5% margin.',
  },
  assumptions: [
    {
      term: 'Cost Basis',
      definition: 'Refers to total landed unit variable costs (materials, manufacturing, and inbound freight).',
    },
    {
      term: 'Pre-Tax Retail Price',
      definition: 'Calculations assume pre-tax prices. Sales taxes or VAT should be added after determining the baseline selling price.',
    },
    {
      term: 'Margin vs Markup Difference',
      definition: 'A 60% target margin requires a 150% markup. Margin is percentage of revenue, markup is percentage of cost.',
    },
  ],
  faqs: [
    {
      question: 'How do you calculate selling price from cost and margin?',
      answer: 'Divide unit cost by (1 minus the target margin percentage expressed as a decimal). For example, with a $40 cost and 60% target margin: $40 ÷ (1 - 0.60) = $40 ÷ 0.40 = $100.',
    },
    {
      question: 'Why is selling price from margin different from markup?',
      answer: 'Margin is calculated against the selling price (the larger number), whereas markup is calculated against cost (the smaller number). As a result, calculating price using a target margin produces a higher selling price than adding that same percentage as markup.',
    },
    {
      question: 'Can target margin be 100%?',
      answer: 'No. A 100% margin requires zero cost or an infinite selling price. In commercial pricing, margins must be strictly less than 100%.',
    },
    {
      question: 'When should I use markup instead of margin?',
      answer: 'Markup is commonly used in cost-plus industries like wholesale distribution, contracting, and manufacturing where you apply a standard multiplier to supplier prices. Margin is preferred in retail, ecommerce, and financial analysis where revenue is the primary benchmark.',
    },
  ],
  relatedSlugs: [
    'profit-margin-calculator',
    'markup-calculator',
    'discount-calculator',
    'gross-profit-calculator',
  ],
};
