import type { CalculatorContent } from '../types';

export const profitMarginContent: CalculatorContent = {
  meta: {
    id: 'profit-margin',
    slug: 'profit-margin-calculator',
    name: 'Profit Margin Calculator',
    shortName: 'Profit Margin',
    category: 'pricing-profit',
    status: 'active',
    tagline: 'Calculate your profit margin from cost and selling price.',
    description:
      'Quickly calculate profit margin, markup, and gross profit from cost and selling price, or find your target selling price based on your desired profit margin.',
    seoTitle: 'Profit Margin Calculator — Calculate Profit Margin',
    seoDescription:
      'Calculate profit margin percentage, gross profit, and markup from unit cost and revenue, or determine your required selling price from a target margin.',
    featured: true,
  },
  formulas: [
    {
      title: 'Gross Profit',
      formula: 'Gross Profit = Selling Price - Cost',
      plainText: 'Subtract unit direct cost (COGS) from the selling price.',
      explanation:
        'Gross profit represents the immediate dollar earnings retained on each unit to cover operating overhead and business expenses.',
    },
    {
      title: 'Profit Margin (%)',
      formula: 'Profit Margin = (Gross Profit ÷ Selling Price) × 100',
      plainText: 'Divide gross profit by selling price, then multiply by 100.',
      explanation:
        'Measures the portion of the selling price retained as profit after covering direct production or acquisition costs. Margin cannot exceed 100%.',
    },
    {
      title: 'Markup (%)',
      formula: 'Markup = (Gross Profit ÷ Cost) × 100',
      plainText: 'Divide gross profit by cost, then multiply by 100.',
      explanation:
        'The percentage added on top of your unit cost to establish your final selling price.',
    },
    {
      title: 'Return on Cost (%)',
      formula: 'Return on Cost = (Gross Profit ÷ Cost) × 100',
      plainText: 'Divide gross profit by cost, then multiply by 100.',
      explanation:
        'Measures the yield or return generated on every dollar of inventory or direct production capital deployed.',
    },
    {
      title: 'Target Selling Price from Margin',
      formula: 'Selling Price = Cost ÷ (1 - (Target Margin ÷ 100))',
      plainText: 'Divide unit cost by 1 minus the decimal margin.',
      explanation:
        'Use this formula to determine the necessary selling price when you know your unit cost and require a specific margin percentage.',
    },
  ],
  workedExample: {
    title: 'Standard Retail Example ($40 Cost / $100 Price)',
    scenario:
      'A business sources a product for $40.00 in direct manufacturing and landed costs and sells it to customers for $100.00.',
    inputs: {
      'Unit Cost (COGS)': '$40.00',
      'Selling Price': '$100.00',
    },
    steps: [
      'Gross Profit = $100.00 - $40.00 = $60.00',
      'Profit Margin = ($60.00 ÷ $100.00) × 100 = 60.00%',
      'Markup = ($60.00 ÷ $40.00) × 100 = 150.00%',
      'Return on Cost = ($60.00 ÷ $40.00) × 100 = 150.00%',
    ],
    results: {
      'Gross Profit': '$60.00',
      'Profit Margin': '60.00%',
      'Markup': '150.00%',
      'Return on Cost': '150.00%',
    },
    takeaway:
      'On a $100 sale, $40 recovers direct costs while $60 remains as gross profit. A 60% profit margin corresponds to a 150% markup because markup is calculated against the smaller cost base ($40), not total revenue ($100).',
  },
  assumptions: [
    {
      term: 'Cost of Goods Sold (COGS)',
      definition:
        'Represents the direct variable costs needed to produce or acquire the item, including raw materials, supplier price, and inbound shipping. It does not include fixed overhead.',
    },
    {
      term: 'Gross Margin vs. Net Margin',
      definition:
        'This tool calculates gross margin. It does not deduct indirect business expenses like rent, marketing, administrative salaries, utilities, software fees, or income taxes.',
    },
    {
      term: 'Pre-Tax Pricing',
      definition:
        'Inputs and calculations are pre-tax. Sales tax, VAT, or duties should either be excluded from both cost and price or accounted for consistently.',
    },
  ],
  faqs: [
    {
      question: 'What is profit margin?',
      answer:
        'Profit margin is a profitability metric that measures the percentage of sales revenue a business keeps after paying for direct production or acquisition costs. A higher margin indicates a more financially resilient business capable of absorbing operational overhead and marketing expenses.',
    },
    {
      question: 'How do you calculate profit margin?',
      answer:
        'To calculate profit margin, first determine gross profit by subtracting direct unit cost (COGS) from your selling price. Next, divide gross profit by the selling price and multiply by 100. Formula: Profit Margin = ((Selling Price - Cost) ÷ Selling Price) × 100.',
    },
    {
      question: 'What is the difference between margin and markup?',
      answer:
        'Margin is profit expressed as a percentage of the selling price, while markup is profit expressed as a percentage of the cost. Because cost is lower than selling price on profitable sales, markup percentage is always higher than profit margin percentage for the same product.',
    },
    {
      question: 'Is gross margin the same as net margin?',
      answer:
        'No. Gross margin only deducts direct cost of goods sold (COGS) like materials and manufacturing. Net margin deducts all remaining business operating expenses, including rent, payroll, advertising, software subscriptions, loan interest, and taxes.',
    },
    {
      question: 'How do I calculate selling price from a target margin?',
      answer:
        'To calculate the required selling price for a desired margin, divide your unit cost by 1 minus your target margin percentage in decimal form. Formula: Selling Price = Cost ÷ (1 - Margin). For example, to earn a 40% margin on a $60 cost: $60 ÷ (1 - 0.40) = $60 ÷ 0.60 = $100.',
    },
    {
      question: 'When is a profit margin calculator useful?',
      answer:
        'A profit margin calculator is essential when evaluating product viability, reviewing supplier price changes, setting wholesale discount tiers, or determining whether revenue growth is generating sufficient gross profit to support operating overhead.',
    },
  ],
  relatedSlugs: [
    'markup-calculator',
    'selling-price-calculator',
    'gross-profit-calculator',
    'break-even-calculator',
    'roi-calculator',
  ],
};
