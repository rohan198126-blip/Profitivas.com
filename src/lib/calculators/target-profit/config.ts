import type { CalculatorContent } from '../types';

export const targetProfitContent: CalculatorContent = {
  meta: {
    id: 'target-profit',
    slug: 'target-profit-calculator',
    name: 'Target Profit Calculator',
    shortName: 'Target Profit',
    category: 'business',
    status: 'active',
    tagline: 'Calculate required sales volume to reach a specific profit goal.',
    description: 'Determine the exact units and sales revenue needed to achieve your target operating income after covering all fixed overhead.',
    seoTitle: 'Target Profit Calculator — Calculate Required Sales',
    seoDescription: 'Calculate units and revenue needed to hit your target business profit. Plan sales goals based on fixed overhead and unit margins.',
    featured: true,
  },
  formulas: [
    {
      title: 'Required Units',
      formula: 'Required Units = (Fixed Costs + Target Profit) ÷ (Selling Price - Variable Cost per Unit)',
      plainText: 'Divide total overhead requirement by unit contribution margin.',
      explanation: 'Calculates the volume of units needed to satisfy all fixed obligations plus target operating income.',
    },
    {
      title: 'Required Sales Revenue ($)',
      formula: 'Required Revenue = Required Units × Unit Selling Price',
      plainText: 'Multiply required units by unit selling price.',
      explanation: 'Total top-line turnover needed to hit your bottom-line profit goal.',
    },
  ],
  workedExample: {
    title: 'Consulting Studio Profit Goal ($10k Fixed / $5k Target / $50 Price / $30 Var)',
    scenario: 'A consulting studio has $10,000.00 in fixed monthly overhead, sells billable units at $50.00 with $30.00 in direct variable cost, and targets $5,000.00 in net operating income.',
    inputs: {
      'Fixed Costs': '$10,000.00',
      'Target Profit': '$5,000.00',
      'Selling Price': '$50.00',
      'Variable Cost': '$30.00',
    },
    steps: [
      'Contribution Margin = $50.00 - $30.00 = $20.00',
      'Total Required = $10,000.00 + $5,000.00 = $15,000.00',
      'Required Units = $15,000.00 ÷ $20.00 = 750 units',
      'Required Revenue = 750 units × $50.00 = $37,500.00',
    ],
    results: {
      'Required Units': '750 units',
      'Required Revenue': '$37,500.00',
      'Operating Profit': '$5,000.00',
    },
    takeaway: 'Delivering 750 units produces $37,500.00 in revenue, fully covering $10,000.00 in fixed costs and delivering the $5,000.00 profit goal.',
  },
  assumptions: [
    {
      term: 'Operating Income Basis',
      definition: 'Target profit is measured pre-tax (operating income before corporate income taxes).',
    },
    {
      term: 'Capacity Feasibility',
      definition: 'Assumes the business has operational capacity to deliver the required units without expanding fixed plant or team overhead.',
    },
  ],
  faqs: [
    {
      question: 'How do I calculate target profit?',
      answer:
        'To calculate sales needed for a target profit, add fixed costs to target profit and divide by unit contribution margin: Required Units = (Fixed Costs + Target Profit) ÷ (Selling Price - Variable Cost). Multiply required units by unit price to find required sales revenue.',
    },
    {
      question: 'How does target profit relate to break-even?',
      answer: 'Target profit analysis treats your desired profit as an additional required fixed obligation. Break-even solves for $0 profit, while target profit solves for your specific dollar goal.',
    },
    {
      question: 'How do I calculate for after-tax target profit?',
      answer: 'Divide your after-tax target profit by (1 - Tax Rate) to determine pre-tax operating income, then enter that amount into this calculator.',
    },
  ],
  relatedSlugs: [
    'break-even-calculator',
    'gross-profit-calculator',
    'revenue-calculator',
    'profit-margin-calculator',
  ],
};
