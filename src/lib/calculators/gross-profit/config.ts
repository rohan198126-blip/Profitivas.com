import type { CalculatorContent } from '../types';

export const grossProfitContent: CalculatorContent = {
  meta: {
    id: 'gross-profit',
    slug: 'gross-profit-calculator',
    name: 'Gross Profit Calculator',
    shortName: 'Gross Profit',
    category: 'pricing-profit',
    status: 'active',
    tagline: 'Calculate gross profit dollars and gross margin from revenue and COGS.',
    description: 'Analyze top-line gross profitability and gross margin percentage across total revenue and cost of goods sold.',
    seoTitle: 'Gross Profit Calculator — Calculate Gross Profit & Margin',
    seoDescription: 'Calculate gross profit and gross margin from total revenue and cost of goods sold (COGS). Fast, client-side business metrics.',
    featured: true,
  },
  formulas: [
    {
      title: 'Gross Profit ($)',
      formula: 'Gross Profit = Total Revenue - Cost of Goods Sold (COGS)',
      plainText: 'Subtract direct product costs from total revenue.',
      explanation: 'Measures the absolute dollars retained to cover operating expenses, debt service, taxes, and net profit.',
    },
    {
      title: 'Gross Margin (%)',
      formula: 'Gross Margin = (Gross Profit ÷ Total Revenue) × 100',
      plainText: 'Divide gross profit by total revenue, then multiply by 100.',
      explanation: 'Reveals the proportion of each revenue dollar retained as gross earnings before indirect overhead.',
    },
    {
      title: 'Effective Markup (%)',
      formula: 'Markup = (Gross Profit ÷ COGS) × 100',
      plainText: 'Divide gross profit by COGS, then multiply by 100.',
      explanation: 'The percentage markup earned above the direct cost of goods sold.',
    },
  ],
  workedExample: {
    title: 'E-Commerce Store Monthly Gross Profit ($100k Revenue / $40k COGS)',
    scenario: 'An online brand generates $100,000.00 in monthly sales revenue with direct manufacturing and packaging costs of $40,000.00.',
    inputs: {
      'Total Revenue': '$100,000.00',
      'Cost of Goods Sold': '$40,000.00',
    },
    steps: [
      'Gross Profit = $100,000.00 - $40,000.00 = $60,000.00',
      'Gross Margin = ($60,000.00 ÷ $100,000.00) × 100 = 60.00%',
      'Effective Markup = ($60,000.00 ÷ $40,000.00) × 100 = 150.00%',
    ],
    results: {
      'Gross Profit': '$60,000.00',
      'Gross Margin': '60.00%',
      'Effective Markup': '150.00%',
    },
    takeaway: 'The store retains $60,000.00 (60.00% gross margin) to fund marketing, payroll, and administrative operations.',
  },
  assumptions: [
    {
      term: 'Net Revenue',
      definition: 'Assumes revenue is net of customer returns, refunds, and promotional allowances.',
    },
    {
      term: 'Direct COGS',
      definition: 'Includes only direct production and landed inventory costs, excluding indirect operating expenses (OPEX).',
    },
  ],
  faqs: [
    {
      question: 'How do I calculate gross profit?',
      answer:
        'Gross profit is calculated by subtracting Cost of Goods Sold (COGS) from Total Revenue: Gross Profit = Revenue - COGS. To find the gross profit margin percentage, divide gross profit by total revenue and multiply by 100: Gross Margin (%) = (Gross Profit ÷ Revenue) × 100.',
    },
    {
      question: 'What is the difference between gross profit and net profit?',
      answer: 'Gross profit measures revenue minus direct production costs (COGS). Net profit is the final bottom line after deducting all operational overhead, marketing, salaries, interest, and taxes.',
    },
    {
      question: 'What is a healthy gross profit margin?',
      answer: 'Healthy gross margins vary widely: software and SaaS often achieve 75%–85%, retail and ecommerce typically range between 40%–60%, and wholesale or grocery often operates between 15%–25%.',
    },
    {
      question: 'Does COGS include advertising spend?',
      answer: 'No. Advertising, sales salaries, and software tools are classified as operating expenses (OPEX), not COGS.',
    },
  ],
  relatedSlugs: [
    'profit-margin-calculator',
    'break-even-calculator',
    'target-profit-calculator',
    'revenue-calculator',
  ],
};
