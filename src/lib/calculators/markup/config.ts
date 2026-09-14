import type { CalculatorContent } from '../types';

export const markupContent: CalculatorContent = {
  meta: {
    id: 'markup',
    slug: 'markup-calculator',
    name: 'Markup Calculator',
    shortName: 'Markup',
    category: 'pricing-profit',
    status: 'active',
    tagline: 'Calculate markup percentage, gross profit, and selling price from unit cost.',
    description:
      'Calculate markup percentage, gross profit, and profit margin from unit cost and selling price, or find your target selling price from a desired markup.',
    seoTitle: 'Markup Calculator — Calculate Markup & Selling Price',
    seoDescription:
      'Calculate markup percentage, gross profit dollars, and resulting profit margin from unit cost and selling price, or find your target selling price.',
    featured: true,
  },
  formulas: [
    {
      title: 'Markup Percentage',
      formula: 'Markup (%) = (Gross Profit / Cost) × 100',
      plainText: 'Divide gross profit dollars by unit cost, then multiply by 100.',
      explanation:
        'Markup shows the exact percentage added on top of your acquisition or production cost to establish your final selling price.',
    },
    {
      title: 'Selling Price from Markup',
      formula: 'Selling Price = Cost × (1 + (Markup / 100))',
      plainText: 'Multiply unit cost by 1 plus the decimal markup percentage.',
      explanation:
        'The foundational formula for cost-plus pricing: calculates the exact shelf price needed to achieve your target markup rate.',
    },
    {
      title: 'Gross Profit',
      formula: 'Gross Profit = Selling Price - Cost',
      plainText: 'Subtract unit cost (COGS) from the selling price.',
      explanation:
        'The net dollar gain generated per unit sold before deducting indirect operational overhead and income taxes.',
    },
    {
      title: 'Resulting Profit Margin',
      formula: 'Profit Margin (%) = (Gross Profit / Selling Price) × 100',
      plainText: 'Divide gross profit by selling price, then multiply by 100.',
      explanation:
        'Measures the portion of the customer price retained as gross profit. Profit margin is always lower than markup on profitable goods.',
    },
  ],
  workedExample: {
    title: 'Retail Wholesale Sourcing Example',
    scenario:
      'A specialty home goods retailer purchases a handcrafted ceramic dinner set from an artisan supplier for $40.00 and prices it at $100.00 in their retail showroom.',
    inputs: {
      'Unit Cost (COGS)': '$40.00',
      'Retail Selling Price': '$100.00',
    },
    steps: [
      'Gross Profit = $100.00 - $40.00 = $60.00',
      'Markup (%) = ($60.00 / $40.00) × 100 = 150.00%',
      'Profit Margin (%) = ($60.00 / $100.00) × 100 = 60.00%',
      'Return on Cost (%) = ($60.00 / $40.00) × 100 = 150.00%',
    ],
    results: {
      'Markup': '150.00%',
      'Gross Profit': '$60.00',
      'Profit Margin': '60.00%',
      'Return on Cost': '150.00%',
    },
    takeaway:
      'The retailer applied a 150% markup to the $40 wholesale cost. This generates $60 in gross profit per unit and establishes a 60% gross profit margin.',
  },
  assumptions: [
    {
      term: 'Cost Basis (COGS)',
      definition:
        'Calculated against direct unit variable cost (inbound freight, supplier wholesale price, direct manufacturing). Indirect overhead like rent and utilities is excluded.',
    },
    {
      term: 'Equivalence to Return on Cost',
      definition:
        'In unit-level pricing, markup percentage and return on unit cost are mathematically identical: both equal (Gross Profit / Cost) × 100.',
    },
    {
      term: 'Pre-Tax Retail Pricing',
      definition:
        'Calculations assume pre-tax pricing. Sales tax or VAT collected on behalf of taxing authorities is excluded from gross revenue and cost.',
    },
  ],
  faqs: [
    {
      question: 'What is the difference between markup and profit margin?',
      answer:
        'Markup calculates profit as a percentage of cost, while profit margin calculates profit as a percentage of selling price (revenue). Because cost is lower than selling price on profitable sales, markup percentage is always higher than margin percentage for the same product.',
    },
    {
      question: 'Can markup be higher than 100%?',
      answer:
        'Yes, markup can easily exceed 100%. A 100% markup doubles the cost (e.g., $50 cost sells for $100). A 200% markup triples it ($50 cost sells for $150). In industries like apparel, cosmetics, and jewelry, markups between 150% and 400% are common.',
    },
    {
      question: 'Why does a 100% markup equal a 50% profit margin?',
      answer:
        'If an item costs $50 and sells for $100, profit is $50. The markup is ($50 / $50) × 100 = 100%. The profit margin is ($50 / $100) × 100 = 50%. You made 100% on what you spent, but retained 50% of the customer transaction price.',
    },
    {
      question: 'What is cost-plus pricing?',
      answer:
        'Cost-plus pricing is a pricing strategy where a business calculates the total cost of producing or purchasing a unit and adds a fixed markup percentage to guarantee a predictable profit margin per sale.',
    },
    {
      question: 'What happens if cost is zero in a markup calculation?',
      answer:
        'If unit cost is $0.00 and selling price is positive, markup is mathematically undefined because division by zero is impossible. However, the profit margin is 100% because all proceeds are gross profit.',
    },
    {
      question: 'When is a markup calculator useful?',
      answer:
        'A markup calculator is most useful during cost-plus pricing workflows—such as retail purchasing, wholesale distribution, contracting, and manufacturing—where you start with known unit or project costs and need to apply a predetermined markup to establish a profitable shelf or invoice price.',
    },
  ],
  relatedSlugs: [
    'profit-margin-calculator',
    'selling-price-calculator',
    'discount-calculator',
    'gross-profit-calculator',
  ],
};
