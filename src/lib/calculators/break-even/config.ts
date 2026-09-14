import type { CalculatorContent } from '../types';

export const breakEvenContent: CalculatorContent = {
  meta: {
    id: 'break-even',
    slug: 'break-even-calculator',
    name: 'Break-Even Calculator',
    shortName: 'Break-Even',
    category: 'business',
    status: 'active',
    tagline: 'Find unit volume and revenue needed to cover all fixed and variable costs.',
    description: 'Calculate the exact point where revenue equals total costs and operating profit begins.',
    seoTitle: 'Break-Even Calculator — Find Your Break-Even Point',
    seoDescription: 'Find your break-even point in units and sales dollars using fixed overhead, unit price, and variable costs. Free business calculator.',
    featured: true,
  },
  formulas: [
    {
      title: 'Contribution Margin ($)',
      formula: 'Contribution Margin = Selling Price - Variable Cost per Unit',
      plainText: 'Subtract unit variable cost from unit selling price.',
      explanation: 'The dollar amount each sold unit contributes toward paying off total fixed overhead.',
    },
    {
      title: 'Break-Even Units',
      formula: 'Break-Even Units = Total Fixed Costs ÷ Contribution Margin',
      plainText: 'Divide total fixed costs by contribution margin per unit.',
      explanation: 'The exact sales volume required before the business begins generating net profit.',
    },
    {
      title: 'Break-Even Revenue ($)',
      formula: 'Break-Even Revenue = Break-Even Units × Unit Selling Price',
      plainText: 'Multiply break-even units by unit selling price.',
      explanation: 'Total gross sales turnover required to cover all operating overhead.',
    },
  ],
  workedExample: {
    title: 'Subscription Box Break-Even Point ($10k Fixed / $50 Price / $30 Var)',
    scenario: 'A subscription business incurs $10,000.00 in monthly fixed overhead. Each box sells for $50.00 with $30.00 in variable costs.',
    inputs: {
      'Fixed Costs': '$10,000.00',
      'Selling Price': '$50.00',
      'Variable Cost': '$30.00',
    },
    steps: [
      'Contribution Margin = $50.00 - $30.00 = $20.00 per unit',
      'Break-Even Units = $10,000.00 ÷ $20.00 = 500 units',
      'Break-Even Revenue = 500 units × $50.00 = $25,000.00',
    ],
    results: {
      'Break-Even Units': '500 units',
      'Break-Even Revenue': '$25,000.00',
      'Contribution Margin': '$20.00',
    },
    takeaway: 'Selling 500 units generates $25,000.00 in gross revenue, exactly covering the $10,000.00 fixed overhead.',
  },
  assumptions: [
    {
      term: 'Static Fixed Costs',
      definition: 'Assumes fixed costs remain unchanged across the modeled sales volume range.',
    },
    {
      term: 'Linear Variable Costs',
      definition: 'Assumes per-unit production costs remain constant without volume-based step discounts.',
    },
  ],
  faqs: [
    {
      question: 'How do I calculate break-even units?',
      answer:
        'To calculate break-even units, divide total fixed costs by your unit contribution margin (selling price minus variable cost per unit). Formula: Break-Even Units = Fixed Costs ÷ (Price - Variable Cost). For example, $10,000 in fixed overhead with a $20 unit contribution margin requires 500 units to break even.',
    },
    {
      question: 'What happens if variable cost exceeds selling price?',
      answer: 'If variable cost is greater than or equal to selling price, each unit sold loses money. A break-even point is mathematically impossible until unit price increases or variable costs decrease.',
    },
    {
      question: 'What is contribution margin ratio?',
      answer: 'The contribution margin ratio is contribution margin divided by selling price. It represents the percentage of each sales dollar available to cover fixed costs.',
    },
  ],
  relatedSlugs: [
    'target-profit-calculator',
    'gross-profit-calculator',
    'revenue-calculator',
    'profit-margin-calculator',
  ],
};
