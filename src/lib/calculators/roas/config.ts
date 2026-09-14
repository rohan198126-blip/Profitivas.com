import type { CalculatorContent } from '../types';

export const roasContent: CalculatorContent = {
  meta: {
    id: 'roas',
    slug: 'roas-calculator',
    name: 'ROAS Calculator',
    shortName: 'ROAS',
    category: 'marketing',
    status: 'active',
    tagline: 'Calculate return on ad spend and campaign profitability.',
    description: 'Determine gross advertising revenue generated for each dollar invested in paid media campaigns.',
    seoTitle: 'ROAS Calculator — Calculate Return on Ad Spend',
    seoDescription: 'Calculate return on ad spend (ROAS) multiple and percentage from advertising budget and attributed revenue. Free marketing tool.',
    featured: true,
  },
  formulas: [
    {
      title: 'Return on Ad Spend (Multiple)',
      formula: 'ROAS Multiple = Attributed Ad Revenue ÷ Total Ad Spend',
      plainText: 'Divide attributed revenue by ad spend.',
      explanation: 'Indicates the gross dollars of revenue generated per single dollar spent on media.',
    },
    {
      title: 'ROAS Percentage (%)',
      formula: 'ROAS (%) = (Attributed Ad Revenue ÷ Total Ad Spend) × 100',
      plainText: 'Divide attributed revenue by ad spend, then multiply by 100.',
      explanation: 'Percentage representation of advertising revenue efficiency.',
    },
    {
      title: 'Advertising Cost of Sales (ACoS %)',
      formula: 'ACoS (%) = (Total Ad Spend ÷ Attributed Ad Revenue) × 100',
      plainText: 'Divide ad spend by revenue, then multiply by 100.',
      explanation: 'Measures what percentage of generated revenue was spent on media buying.',
    },
  ],
  workedExample: {
    title: 'Paid Ads Campaign ($15k Revenue / $3k Ad Spend)',
    scenario: 'An ecommerce brand spends $3,000.00 across search and social media campaigns, generating $15,000.00 in directly attributed customer sales.',
    inputs: {
      'Attributed Revenue': '$15,000.00',
      'Total Ad Spend': '$3,000.00',
    },
    steps: [
      'ROAS Multiple = $15,000.00 ÷ $3,000.00 = 5.00x',
      'ROAS Percentage = 5.00 × 100 = 500.00%',
      'Net Revenue after Ads = $15,000.00 - $3,000.00 = $12,000.00',
      'ACoS = ($3,000.00 ÷ $15,000.00) × 100 = 20.00%',
    ],
    results: {
      'ROAS Multiple': '5.00x',
      'ROAS Percentage': '500.00%',
      'ACoS': '20.00%',
      'Net Return': '$12,000.00',
    },
    takeaway: 'Every $1.00 invested into media buying produced $5.00 in top-line revenue, leaving a 20.00% advertising cost of sales ratio.',
  },
  assumptions: [
    {
      term: 'Attribution Fidelity',
      definition: 'Assumes analytics tracking accurately ties purchases to the measured ad campaigns.',
    },
    {
      term: 'Top-Line Measure',
      definition: 'ROAS reflects top-line sales turnover, not net profit after product manufacturing and shipping costs.',
    },
  ],
  faqs: [
    {
      question: 'How is ROAS different from ROI?',
      answer:
        'ROAS measures gross revenue generated per dollar of ad spend (a top-line marketing efficiency metric). ROI measures net profit relative to total investment costs after deducting product manufacturing, shipping, operational, and media expenses.',
    },
    {
      question: 'What is a good ROAS?',
      answer: 'A 4.00x–5.00x ROAS ($4–$5 revenue per $1 spent) is a common benchmark for ecommerce. High-margin SaaS businesses can often operate profitably at 2.0x–3.0x, while low-margin retail may require 5.0x+.',
    },
    {
      question: 'What is break-even ROAS?',
      answer: 'Break-even ROAS equals 1 ÷ Gross Margin. If your gross margin is 50%, break-even ROAS is 1 ÷ 0.50 = 2.00x. Any ROAS above 2.00x delivers net profit after direct product costs.',
    },
  ],
  relatedSlugs: [
    'roi-calculator',
    'cac-calculator',
    'conversion-rate-calculator',
    'revenue-calculator',
  ],
};
