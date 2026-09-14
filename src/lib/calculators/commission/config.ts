import type { CalculatorContent } from '../types';

export const commissionContent: CalculatorContent = {
  meta: {
    id: 'commission',
    slug: 'commission-calculator',
    name: 'Commission Calculator',
    shortName: 'Commission',
    category: 'business',
    status: 'active',
    tagline: 'Calculate sales commission earnings and total compensation.',
    description: 'Calculate sales commission payouts, total compensation, and percentage rates from sales volume.',
    seoTitle: 'Commission Calculator — Calculate Sales Commission',
    seoDescription: 'Calculate sales commission payouts and total earnings based on transaction volume, percentage rates, and optional base salary.',
    featured: true,
  },
  formulas: [
    {
      title: 'Commission Payout ($)',
      formula: 'Commission = Sales Amount × (Commission Rate % ÷ 100)',
      plainText: 'Multiply total sales volume by the decimal commission rate.',
      explanation: 'The variable incentive payout earned on closed customer transactions.',
    },
    {
      title: 'Total Compensation ($)',
      formula: 'Total Earnings = Base Salary + Commission',
      plainText: 'Add base salary to the earned commission payout.',
      explanation: 'Combined take-home pay reflecting guaranteed wages plus performance commission.',
    },
  ],
  workedExample: {
    title: 'Sales Contract Commission ($20,000 Sales @ 7.5% Rate)',
    scenario: 'A sales executive closes a $20,000.00 contract with an agreed 7.5% commission rate.',
    inputs: {
      'Sales Volume': '$20,000.00',
      'Commission Rate': '7.50%',
      'Base Salary': '$0.00',
    },
    steps: [
      'Commission = $20,000.00 × 0.075 = $1,500.00',
      'Total Compensation = $0.00 + $1,500.00 = $1,500.00',
      'Total Contract with Commission = $20,000.00 + $1,500.00 = $21,500.00',
    ],
    results: {
      'Commission Amount': '$1,500.00',
      'Total with Commission': '$21,500.00',
      'Total Earnings': '$1,500.00',
    },
    takeaway: 'The sales representative earns a $1,500.00 payout on the $20,000.00 deal.',
  },
  assumptions: [
    {
      term: 'Flat Commission Rate',
      definition: 'Calculates a flat percentage across the full sales amount without progressive tiering.',
    },
    {
      term: 'Gross Deal Volume',
      definition: 'Assumes the sales volume represents net collected contract value without clawbacks.',
    },
  ],
  faqs: [
    {
      question: 'How is sales commission calculated?',
      answer:
        'Sales commission is calculated by multiplying the closed sales volume by the agreed commission rate: Commission = Sales Amount × (Commission Rate ÷ 100). If you also receive a base salary, add that to find total compensation: Total Earnings = Base Salary + Commission.',
    },
    {
      question: 'What is a typical sales commission rate?',
      answer: 'Standard rates vary: B2B software commonly pays 8%–12% of Annual Contract Value (ACV), real estate agents typically earn 2.5%–3.0% per side, and retail or automotive ranges from 15%–25% of gross profit.',
    },
    {
      question: 'What is an OTE (On-Target Earnings)?',
      answer: 'OTE represents total expected annual compensation when a sales professional hits 100% of their assigned quota, typically split 50/50 between base salary and commissions.',
    },
  ],
  relatedSlugs: [
    'revenue-calculator',
    'gross-profit-calculator',
    'profit-margin-calculator',
    'selling-price-calculator',
  ],
};
