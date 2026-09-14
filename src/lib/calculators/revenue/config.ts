import type { CalculatorContent } from '../types';

export const revenueContent: CalculatorContent = {
  meta: {
    id: 'revenue',
    slug: 'revenue-calculator',
    name: 'Revenue Calculator',
    shortName: 'Revenue',
    category: 'business',
    status: 'active',
    tagline: 'Calculate total revenue from price and unit sales volume.',
    description: 'Calculate projected business revenue, total sales volume turnover, and top-line income from unit price and sales volume.',
    seoTitle: 'Revenue Calculator — Calculate Total Revenue',
    seoDescription: 'Calculate total sales turnover from unit sales volume and average price per unit. Fast, client-side business forecasting.',
    featured: true,
  },
  formulas: [
    {
      title: 'Total Revenue ($)',
      formula: 'Total Revenue = Units Sold × Price per Unit',
      plainText: 'Multiply units sold by average selling price.',
      explanation: 'The top-line gross dollar amount generated before deducting any direct product or operating expenses.',
    },
  ],
  workedExample: {
    title: 'Product Volume Turnover (1,200 Units @ $45.00 Price)',
    scenario: 'A manufacturer sells 1,200 wholesale units at an average contract price of $45.00 per unit.',
    inputs: {
      'Units Sold': '1,200 units',
      'Price per Unit': '$45.00',
    },
    steps: [
      'Total Revenue = 1,200 units × $45.00 = $54,000.00',
    ],
    results: {
      'Total Revenue': '$54,000.00',
      'Average Order': '$45.00',
    },
    takeaway: 'Total sales turnover generated is $54,000.00.',
  },
  assumptions: [
    {
      term: 'Gross Realized Price',
      definition: 'Reflects the actual invoiced unit price collected from clients.',
    },
    {
      term: 'Top-Line Exclusions',
      definition: 'Revenue does not account for production costs, shipping, taxes, or business overhead.',
    },
  ],
  faqs: [
    {
      question: 'How do I calculate revenue?',
      answer:
        'To calculate total revenue, multiply total units sold by average selling price: Revenue = Units Sold × Price per Unit. For subscription businesses, multiply active users or accounts by average recurring price.',
    },
    {
      question: 'What is the difference between revenue and profit?',
      answer: 'Revenue is the top-line cash generated from selling goods or services. Profit is what remains after subtracting costs like manufacturing, payroll, taxes, and software.',
    },
    {
      question: 'What is Average Revenue Per User (ARPU)?',
      answer: 'In subscription businesses, ARPU measures average revenue generated per user or subscriber over a given time interval (Total Revenue ÷ Total Active Users).',
    },
  ],
  relatedSlugs: [
    'gross-profit-calculator',
    'break-even-calculator',
    'target-profit-calculator',
    'commission-calculator',
  ],
};
